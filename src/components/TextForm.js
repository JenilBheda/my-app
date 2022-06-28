import React, {useState} from 'react'

// console.log(useState('Enter Text Here2'))



export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase!", "success")
    }
    
    const handleLoClick = ()=> {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase!", "success")
    }
    
    const pascalCase = ()=> {
        let words = text.split(" ")
        let uppercaseWord = '';
        words.forEach(element => {
            uppercaseWord += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseWord);
        props.showAlert("Coverted to pascalcase !", "success")
    }
    
    const handleClearClick = () => {
        // console.log("I am cleared")
        let newText = '';
        setText(newText);
        props.showAlert("Cleared !", "success")
    }
    
    const handleCopy = () => {
        // console.log("I am copy")
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!", "success")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
    }

    
    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = "new text"; // Correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>

            <h1 className='mb-4'>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={pascalCase}>Convert to PascalCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="conatiner my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.length>0 ? text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>

    )
}
