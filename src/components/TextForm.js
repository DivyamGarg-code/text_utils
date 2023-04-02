import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    // setText("hello World") In this way you can change the state
    const handleUpClick = () => {
        // console.log("Uppercase is clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have Clicked on handleUpClick")
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = () => {
        let text2 = text.toLowerCase();
        setText(text2);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange = (event) => {
        // console.log(text);
        // console.log("On Change",event.target); // this will print the Textarea object 
        setText(event.target.value); // this will set the current value of text area
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Message Cleared!","success");
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Message copied!","success");
    } 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); // Regex is used
        console.log(newText);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    function countWords(text) {
        if (text.trim() === "") {
            return 0;
        }
        // console.log(text.trim().split(" "));
        var cnt=0;
        var arr=text.trim().split(" ");
        var n=arr.length;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]===''){
                cnt++;
            }
        }
        return n-cnt;
    }
    return (
        <>
            <div className='container' style={{ backgroundColor: props.mode === 'dark' ? '#224869' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert To Lowercase</button>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-primary my-3 ' onClick={handleClearClick}>Clear Text</button>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className='container' >
                    <h1>Your Summary</h1>

                    <p>{countWords(text)} words and {text.length} characters</p>
                    <p>{0.008 * countWords(text)} Minutes Read</p>
                    <h2>Preview</h2>
                    <textarea className="form-control" value={text.length>0?text:"Please enter something"} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>
        </>
    )
}
