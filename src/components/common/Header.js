import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = {
        color : "orange",
    };
    return (
        <nav>
            {/* <a href="/">Home </a> | <a href="/about">About</a> | {" "}
            <a href="/courses">Courses</a> */}
            <NavLink activeStyle = {activeStyle} to="/" exact >Home </NavLink>  {" | "} 
            <NavLink activeStyle = {activeStyle} to="/about">About</NavLink> {" | "}
            <NavLink activeStyle = {activeStyle} to="/courses">Courses</NavLink>
        </nav>
    );
}

export default Header;