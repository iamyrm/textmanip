import React, { useState } from 'react'

export default function TextManip(props) {

  const [text, setText] = useState("")

  //For upper Case
  const upperCase = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }


  //For Lower Case
  const lowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  //For copyToClipboard

  const copyToClipboard = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  //For handling Extra Spaces

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  //For reset 
  const reset = () => {
    setText("");
  }

  //For event Handler
  const eventHandler = (event) => {
    setText(event.target.value)
  }


  return (
    <>
      <div className="container my-3">
        <div className="container"><h1>{props.heading}</h1></div>
        <textarea className="form-control my-4" placeholder="Enter text here" value={text} onChange={eventHandler} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={upperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={reset}>Reset All</button>
      </div>

      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <h5>Preview</h5>
        <p>{ text}</p>
      </div>
    </>
  )
}
