import React from "react";
import "./profileBoxListL.css";
import profileIcon from "./../images/svg/profileIcon.svg"

export const ProfileBoxListL = (props) => {
  return (
    <div className="profileBoxListL">
      <img src={profileIcon} alt="プロフィール欄アイコン" />
      <dt>{ props.title }</dt>
      <dd>{ props.discription }</dd>
    </div>
  )
}