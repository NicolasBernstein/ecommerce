import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function GlobalStateProvider({ children }) {
    const [Menu, SetMenu] = useState(false);

    return (
        <GlobalStateContext.Provider value={{ Menu, SetMenu }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    return useContext(GlobalStateContext);
}