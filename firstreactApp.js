import "./styles.css";
import React, { useState } from "react";
var nme = " Emoji Trasnlator";
var colorname = "green";

const emojiDictonary = {
  "💕": " Love ledh ",
  "😊": " navvu ra",
  "😒": " atta sustav endhi",
  "😘": " mudhu",
  "😁": "edho ettiki pettina",
  "👍": " saalu apu "
};

var emojis = Object.keys(emojiDictonary);

export default function App() {
  const [outtext, textholder] = useState("");

  function emojiDisplay(event) {
    var useremoji = event.target.value;

    var outtext = emojiDictonary[useremoji];

    //  console.log(outtext);
    if (outtext == undefined) {
      outtext = " we dont have this in our database";
    }
    textholder(outtext);
  }

  function emojiClickHandler(emoji) {
    var outtext = emojiDictonary[emoji];
    textholder(outtext);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: colorname }}>{nme}</h1>
      <input onChange={emojiDisplay} />

      <h2> {outtext}</h2>
      <h3>emojis we know</h3>
      {emojis.map(function (emoji) {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
