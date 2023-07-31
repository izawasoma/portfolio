import React from "react";
import "./hamburgerMenuMain.css";

export const HamburgerMenuMain = (props) => {
    return (
        <ul>
            { props.children }
        </ul>
    );
}