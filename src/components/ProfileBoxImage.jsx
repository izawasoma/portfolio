import React from "react";
import "./profileBoxImage.css";

export const ProfileBoxImage = (props) => {
  return (
    <img className="profileBoxImage" src={props.src} alt={props.alt} />
  )
}