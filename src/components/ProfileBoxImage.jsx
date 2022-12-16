import React from "react";
import "./profileBoxImage.css";

export const ProfileBoxImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} />
  )
}