import React, { createContext, useState } from "react";

export const RootContext = createContext(null);

export const RootProvider = (props) => {
    const [hamburgerMenuState,setHamburgerMenuState] = useState(false);
    return (
        <RootContext.Provider value={{ hamburgerMenuState ,setHamburgerMenuState }}>
            { props.children }
        </RootContext.Provider>
    );
}