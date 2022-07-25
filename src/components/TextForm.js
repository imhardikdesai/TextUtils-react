import React, { useState } from 'react'

export default function TextForm(parms) {

    const [text, setText] = useState("");

    const toUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        parms.showAlert("Converted to UpperCase", "success")
    }
    const toLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        parms.showAlert("Converted to LowerCase", "success")
    }
    const toClear = () => {
        let newText = "";
        setText(newText);
        parms.showAlert("Text Cleard", "success")
    }
    const toCapitalize = () => {
        let newText = text.split(' ');
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].length === 1 || newText[i].length === 2) {
                continue;
            }
            newText[i] = newText[i].replace(newText[i].charAt(0), newText[i].charAt(0).toUpperCase());
        }
        let str = "";
        for (let j = 0; j < newText.length; j++) {
            str += newText[j] + " ";
        }
        setText(str);
        parms.showAlert("Converted to Capitalize", "success")
    }
    const toCopyText = () => {
        let newText = document.getElementById('box');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        parms.showAlert("Copied to Clipboard", "success")
    }
    const toRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        parms.showAlert("Extra spaces are Removed", "success")
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ color: parms.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{parms.title}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: parms.mode === 'dark' ? 'gray' : 'white', color: parms.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter Your text' value={text} onChange={handelOnChange} id="box" rows="8"></textarea>
                    <button className="btn btn-primary my-2 mx-1" onClick={toUpCase}>To UpperCase</button>
                    <button className="btn btn-warning my-2 mx-1" onClick={toLoCase}>To LowerCase</button>
                    <button className="btn btn-danger my-2 mx-1" onClick={toClear}>Clear</button>
                    <button className="btn btn-success my-2 mx-1" onClick={toCapitalize}>To Capitalize</button>
                    <button className="btn btn-secondary my-2 mx-1" onClick={toCopyText}>Copy text</button>
                    <button className="btn btn-info my-2 mx-1" onClick={toRemoveSpace}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container" style={{ color: parms.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p>{text.split(' ').length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(' ').length} minutes to Read</p>
                <hr />
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
