import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const makeRed = () => {
        document.getElementById("myBox").style.color = "red";
        props.showAlert("Converted to red!", "success");
    };

    const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0a0029' }}>
            <h1  style={{ color: props.mode === 'dark' ? 'white' : '#0a0029' }} >{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    style={{ 
                        backgroundColor: props.mode === 'dark' ? '#0a0029' : 'white', 
                        color: props.mode === 'dark' ? 'white' : '#0a0029' 
                    }} 
                    id="myBox" 
                    rows="8">
                </textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={makeRed}>Convert to Red Color</button>

            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : '#0a0029' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words, {text.length} characters</p>
                <p>{0.008 * wordCount} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}


