import React, { useState } from "react";

export default function TextForm(props) {
  // BUTTON WORKIN SET HERE----------------------------
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "Success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "Success");
  };

  const handleclr = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert(" Clear text!", "Success");
  };

  //END WORKING -------------------------------
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert(" Copy to clipbord!", "Success");
  };

  return (
    <>
      <div
        className="container  "
        style={{ color: props.mode === `black` ? `white` : `black` }}
      >
        <h1
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === `dark` ? `white` : `black`,
          }}
        >
          {props.heading}{" "}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === `dark` ? `white` : `black`,
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleclr}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === `dark` ? `white` : `black`,
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview "}</p>
      </div>
    </>
  );
}
