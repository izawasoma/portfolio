import React, { useState, useContext, useEffect } from "react";
import "./hamburgerMenu.css";
import { RootContext } from "../../providers/RootProvider";

export const HamburgerMenu = (props) => {
    //コンテキスト
    const { hamburgerMenuState } = useContext(RootContext);
    //ハンバーガーメニューの表示・非表示のスタイルクラス
    const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState("close");

    /**
     * contextの値によって、ハンバーガーメニューの表示・非表示を切り替える
     */
    useEffect(() => {
        if (hamburgerMenuState) {
            setHamburgerMenuStyle("open");
        }
        else {
            setHamburgerMenuStyle("close");
        }
    }, [hamburgerMenuState]);

    return (
        <nav className={`hamburgerMenu ${hamburgerMenuStyle}`}>
            {props.children}
        </nav>
    );
}