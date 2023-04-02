import React, { useState } from 'react';
import "./Color.css";
<script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
function Color() {
    const [backgroundColor, setBackgroundColor] = useState();
    const changeHandler = (e) => {
        // console.log($(this));
        setBackgroundColor(e.target.style.background)
        console.dir(e.target.style.background);

    }
    return (
        <div className="color_changer" style={{
            background: backgroundColor
        }}>
            <button style={{ background: "red" }} onClick={changeHandler}>
                <div>Hello World</div>
            </button>
            <button style={{ background: "yellow" }} onClick={changeHandler}></button>
            

        </div>
    )
}

export default Color;

