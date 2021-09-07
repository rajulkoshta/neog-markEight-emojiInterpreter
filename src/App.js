import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💌": "Love Letter",
  "🕳": " Hole",
  "💣": "Bomb",
  "🛀": "Person Taking Bath",
  "🛌": "Person in Bed",
  "🔪": "Kitchen Knife",
  "🏺": "Amphora",
  "🗺": " World Map",
  "🧭": "Compass",
  "🧱": "Brick",
  "💈": "Barber Pole",
  "🦽": "Manual Wheelchair",
  "🦼": "Motorized Wheelchair",
  "🛢": " Oil Drum",
  "🛎": " Bellhop Bell",
  "🧳": "Luggage",
  "⌛": "Hourglass Done",
  "⏳": "Hourglass Not Done",
  "⌚": "Watch",
  "⏰": "Alarm Clock",
  "⏱": " Stopwatch",
  "⏲": " Timer Clock",
  "🕰": " Mantelpiece Clock",
  "🌡": " Thermometer",
  "⛱": " Umbrella on Ground",
  "🧨": "Firecracker",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🎊": "Confetti Ball",
  "🎎": "Japanese Dolls",
  "🎏": "Carp Streamer",
  "🎐": "Wind Chime",
  "🧧": "Red Envelope",
  "🎀": "Ribbon",
  "🎁": "Wrapped Gift",
  "🤿": "Diving Mask"
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
        <div className="nav-brand">🤩 emoji interpreter 🤩</div>
      </nav>
      <h1> let's interpret objects</h1>
      <input className="inputEmoji" onChange={emojiInputHandler} />
      <h2>👉 " {meaning} " 👈</h2>
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
