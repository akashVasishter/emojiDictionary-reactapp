import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling face",
  "😉": "winking face",
  "😟": "sad face",
  "💗": "heart",
  "🤑": "Money mouth face",
  "😭": "crying face",
  "😱": "shock face",
  "😡": "angry face",
  "👍": "thumbs up",
  "🙌": "all good"
};

var emojiweKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setemojiMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setemojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setemojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={emojiHandler}></input>
      <h1>{emojiMeaning}</h1>

      <h1>emojis we know</h1>

      {emojiweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**things to notice
 * instead of class=>className is used
 * styles take objects not string values
 * v
 */
