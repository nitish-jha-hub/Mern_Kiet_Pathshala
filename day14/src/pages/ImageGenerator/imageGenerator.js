import {useState} from "react";
import Navbar from "../common/Navbar/navbar";
import "./imageGenerator.css"

const ImageGenerator = () => {
    const [name, setName] = useState("Nitish");

    // let name = "Nitish Initial Value";
    const func = (e) => {
        // name = e.target.value;
        setName(e.target.value);
        console.log(name);
    };

    return (
        <div>
            <Navbar />
            <div className="image-generator-main-container">
                {/* generate image with input field */}
                <input onChange={(e)=>{func(e)}} type="text" />
                <button>Search</button>
                <img src="https://images.unsplash.com/photo-1519068737630-e5db30e12e42?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={300} width={300} alt="image" />
            {name}
            </div>
        </div>
    )
};

export default ImageGenerator;