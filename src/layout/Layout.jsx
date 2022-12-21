/* ライブラリ */
import React from "react";
/* CSS */
import "./Layout.css";
/* コンテンツファイル */
import logo from "./../images/svg/logo.svg";
/* コンポーネント */
import { Router } from "./../routes/Router";

export const Layout = () => {
  return (
    <>
      <header>
        <div>
          <img className="logo" src={logo} alt="logo" />
          <h1>Izawa's Portfolio</h1>
        </div>
        {/* <div id="headerButton">
          <i class="fa-solid fa-bars"></i>
        </div> */}
      </header>
      <main>
        <Router />
      </main>
      <footer>© 2022 izawasoma</footer>
    </>
  )
}
