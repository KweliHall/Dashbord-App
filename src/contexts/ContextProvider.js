import React, { createContent, useContext, useState}from "react";

const StateContext = createContent();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notfication: false,
}

export const ContextProvider = ({ children}) => {
    const [activeMenu, setActiveMenu ] = useState(true);
    
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);