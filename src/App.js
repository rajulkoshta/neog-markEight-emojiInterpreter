import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Love Letter",
  "๐ณ": " Hole",
  "๐ฃ": "Bomb",
  "๐": "Person Taking Bath",
  "๐": "Person in Bed",
  "๐ช": "Kitchen Knife",
  "๐บ": "Amphora",
  "๐บ": " World Map",
  "๐งญ": "Compass",
  "๐งฑ": "Brick",
  "๐": "Barber Pole",
  "๐ฆฝ": "Manual Wheelchair",
  "๐ฆผ": "Motorized Wheelchair",
  "๐ข": " Oil Drum",
  "๐": " Bellhop Bell",
  "๐งณ": "Luggage",
  "โ": "Hourglass Done",
  "โณ": "Hourglass Not Done",
  "โ": "Watch",
  "โฐ": "Alarm Clock",
  "โฑ": " Stopwatch",
  "โฒ": " Timer Clock",
  "๐ฐ": " Mantelpiece Clock",
  "๐ก": " Thermometer",
  "โฑ": " Umbrella on Ground",
  "๐งจ": "Firecracker",
  "๐": "Balloon",
  "๐": "Party Popper",
  "๐": "Confetti Ball",
  "๐": "Japanese Dolls",
  "๐": "Carp Streamer",
  "๐": "Wind Chime",
  "๐งง": "Red Envelope",
  "๐": "Ribbon",
  "๐": "Wrapped Gift",
  "๐คฟ": "Diving Mask"
};
var emojiWeknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation container">
        <div className="nav-brand">๐คฉ emoji interpreter ๐คฉ</div>
      </nav>
      <h1> let's interpret objects</h1>
      <input className="inputEmoji" onChange={emojiInputHandler} />
      <h2>๐ " {meaning} " ๐</h2>
      <section className="section">
        <div className="container container-center">
          <h3>
            do you know what these object actually mean click on it or paste it
            in box to know the meaning
          </h3>
          {emojiWeknow.map(function (emoji) {
            return (
              <span
                className="objects"
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
