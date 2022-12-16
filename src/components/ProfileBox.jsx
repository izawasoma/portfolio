import React from "react";
import "./profileBox.css";

export const ProfileBox = (props) => {
  return (
    <dl className="profileBox">
        {props.children}
    </dl>
  )
}