import React from "react";
import "../styles/navbar.css";


const Navbar = (props) => {
    return (
        <div class="navbar">
        <a href ="#">{props.title}</a>
        </div>
    );
}

export default Navbar;
