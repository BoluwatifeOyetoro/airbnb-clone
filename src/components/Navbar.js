import React from "react";
import airbnb from "./images/airbnb 1.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt="navvv" className="nav--icon" />
            {/* <img src="/airbnb 1.png" alt="navvv" className="nav--icon" /> */}
        </nav>
    )
}