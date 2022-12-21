import React from "react";
import "./skillsBox.css";

export const SkillsBox = (props) => {
  return (
    <ul className="skillsBox">
        {props.children}
    </ul>
  )
}