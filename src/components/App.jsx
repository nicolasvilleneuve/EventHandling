import React, {useState} from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");

    const [mouseEvent, setMouseEvent] = useState(false);

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    const [headingName, setHeading] = useState('');

    function handleMouseOver(){
        setMouseEvent(true);
    }

    function handleMouseOut() {
        setMouseEvent(false);
    }

    function handleClick (event) {
        alert("Form has been submitted!");
    }

    function handleChange(event){
        const {value, name} = event.target;

        setFullName(x => {
            return {
                ...x,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <h1> {headingText} {fullName.fName} {fullName.lName} </h1>
            <form onSubmit={handleClick}>
            <input name="fName"
                   type="text"
                   placeholder="what is your first name?"
                   value={fullName.fName}
                   onChange={handleChange} />

            <input name="lName"
                   type="text"
                   placeholder="what is your last name?"
                   value={fullName.lName}
                   onChange={handleChange} />

            <button onMouseOver={handleMouseOver}
                    style={{backgroundColor: mouseEvent ? "black" : "white"}}
                    onMouseOut={handleMouseOut}>
                Submit</button>
            </form>
        </div>
    );
}

export default App;