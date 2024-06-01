import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link href="/">Home</Link>
                <Link href="/image-generator">Image Generator</Link>
                <Link href="/history">History</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/help">Help</Link>
            </div>
            <div className="right">
            </div>
        </div>
    )
}

export default Navbar;