import "./styles.css";
import React, { useState } from "react";
var nme = " Emoji Trasnlator";
var colorname = "green";

const emojiDictonary = {
  "💕": " Love ",
  "😊": " Smile",
  "😒": " stares differently",
  "😘": " kiss with love",
  "😁": "Laugh",
  "👍": " Okay "
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
      <textarea onChange={emojiDisplay} placeholder="enter emoji" />

      <h2> {outtext}</h2>
      <h6>Emojis We Have </h6>
      {emojis.map(function (emoji) {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
