/* ライブラリ */
import React from "react";
/* CSS */
import "./Destyle.css"
import "./Layout.css";
/* コンテンツファイル */
import logo from "./../images/svg/logo.svg";
/* コンポーネント */
import { Router } from "./../routes/Router";
import { HamburgerButton } from "../components/hamburger_menu/HamburgerButton";
import { RootProvider } from "../providers/RootProvider";
import { HamburgerMenu } from "../components/hamburger_menu/HamburgerMenu";
import { HamburgerMenuMain } from "../components/hamburger_menu/HamburgerMenuMain";
import { HamburgerMenuMainLink } from "../components/hamburger_menu/HamburgerMenuMainLink";
/* アイコン */
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Layout = () => {
  return (
    <RootProvider>
      <header>
        <div>
          <img className="logo" src={logo} alt="logo" />
          <h1>Izawa's Portfolio</h1>
        </div>
        {/* <div id="headerButton">
          <i class="fa-solid fa-bars"></i>
        </div> */}
      </header>
      <HamburgerButton />
      <HamburgerMenu>
        <HamburgerMenuMain>
          <HamburgerMenuMainLink icon={faIdCardClip} title="Profile" subtitle="手前味噌ですが自己紹介" link="/" />
          <HamburgerMenuMainLink icon={faImage} title="Works" subtitle="制作・作品紹介" link="/works" />
          <HamburgerMenuMainLink icon={faPuzzlePiece} title="Play Puzzle" subtitle="パズルと謎解きに挑戦しよう" link="/test" />
          <HamburgerMenuMainLink icon={faEnvelope} title="Contact" subtitle="お仕事の依頼はこちらから" link="/contact" />
        </HamburgerMenuMain>
      </HamburgerMenu>
      <main>
        <Router />
      </main>
      <footer>© 2022 izawasoma</footer>
    </RootProvider>
  )
}
