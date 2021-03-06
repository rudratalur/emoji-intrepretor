// import React from "react";
import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "๐ฅ": "Sad",
  "โค๏ธ": "Love",
  "๐ค": "Swag",
  "๐ค": "Rock-on",
  "๐": "Smiley face",
  "๐": "Face blowing a kiss",
  "๐ท": "A Face with Medical Mask",
  "๐": "Grinning Face",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐ฎโ": "Face Exhaling",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ต": "Dizzy Face",
  "๐ฅณ": "Partying Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ซ": "Tired Face",
  "๐ค": "Face with Steam From Nose",
  "๐?": "Angry Face",
  "๐ฟ": "Angry Face with Horns"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have in our DataBase";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji)
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        style={{ padding: "0.5rem", margin: "0.5rem" }}
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ color: "blue" }}>{meaning}</h2>

      <h3>Emojis we know:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "2rem" }}
            onClick={() => {
              emojiClickHandler(emoji);
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
