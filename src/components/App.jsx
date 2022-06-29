import React, {useState} from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");

    const [mouseEvent, setMouseEvent] = useState(false);

    const [fname, setFName] = useState("");

    const [lname, setLName] = useState("");

    const [headingName, setHeading] = useState('');

    function handleMouseOver(){
        setMouseEvent(true);
    }

    function handleMouseOut() {
        setMouseEvent(false);
    }

    function handleChangeF(event){
        setFName(event.target.value);
    }

    function handleChangeL(event){
        setLName(event.target.value);
    }

    function handleClick (event) {
        setHeading(fname + " " + lname);

        event.preventDefault();
    }

    return (
        <div className="container">
            <h1> {headingText} {headingName} </h1>
            <form onSubmit={handleClick}>
            <input type="text" placeholder="what is your first name?" value={fname} onChange={handleChangeF} />
            <input type="text" placeholder="what is your last name?" value={lname} onChange={handleChangeL} />
            <button onMouseOver={handleMouseOver}
                    style={{backgroundColor: mouseEvent ? "black" : "white"}}
                    onMouseOut={handleMouseOut}
            >Submit</button>
            </form>
        </div>
    );
}

export default App;