import React, {useState} from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");

    const [mouseEvent, setMouseEvent] = useState(false);

    function handleMouseOver(){
        setMouseEvent(true);
    }

    function handleMouseOut() {
        setMouseEvent(false);
    }

    return (
        <div className="container">
            <h1> {headingText} </h1>
            <input type="text" placeholder="what is your name?"/>
            <button onMouseOver={handleMouseOver}
                    style={{backgroundColor: mouseEvent ? "black" : "white"}}
                    onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    );
}

export default App;