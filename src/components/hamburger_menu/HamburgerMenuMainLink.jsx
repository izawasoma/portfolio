import React, { useContext } from "react";
import "./hamburgerMenuMainLink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { RootContext } from "../../providers/RootProvider";

export const HamburgerMenuMainLink = (props) => {
    const navigate = useNavigate();
    const { hamburgerMenuState, setHamburgerMenuState } = useContext(RootContext);
    const linkBoxClickHandler = () => {
        if(hamburgerMenuState){
            setHamburgerMenuState(false);
            navigate(props.link);
        }
    }
    return (
        <li className="hamburgerMenuMainLink" onClick={ linkBoxClickHandler }>
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} size="3x" color="white" />
            </div>
            <dl>
                <dt>{ props.title }</dt>
                <dd>{ props.subtitle }</dd>
            </dl>
        </li>
    );
}