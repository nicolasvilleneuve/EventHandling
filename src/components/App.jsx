import React, {useState} from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");

    const [mouseEvent, setMouseEvent] = useState(false);

    const [name, setName] = useState("");

    const [headingName, setHeading] = useState('');

    function handleMouseOver(){
        setMouseEvent(true);
    }

    function handleMouseOut() {
        setMouseEvent(false);
    }

    function handleChange(event){
        setName(event.target.value);
    }

    function handleClick (event) {
        setHeading(name);
    }

    return (
        <div className="container">
            <h1> {headingText} {headingName} </h1>
            <input type="text" placeholder="what is your name?" value={name} onChange={handleChange} />
            <button onMouseOver={handleMouseOver}
                    style={{backgroundColor: mouseEvent ? "black" : "white"}}
                    onMouseOut={handleMouseOut}
                    onClick={handleClick}
            >Submit</button>
        </div>
    );
}

export default App;