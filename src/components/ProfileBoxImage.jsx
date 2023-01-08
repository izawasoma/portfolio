import React from "react";
import "./profileBoxImage.css";

export const ProfileBoxImage = (props) => {
  return (
    <div className="profileBoxImageWrapper">
      <div className="hand" onClick={props.clickEvent}></div>
      <img className="profileBoxImage" src={props.src} alt={props.alt} />
    </div>
  )
}