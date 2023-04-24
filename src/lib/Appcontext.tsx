
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type ContextChildren = {

    children : React.ReactNode
}


interface appContext  {

    name : string | null,
    setName : Dispatch<SetStateAction<string | null>>
}

const appContextValue  = {

    name : null,
    setName : async () => {}
}

const applicationContext = createContext<appContext>(appContextValue);

export const UseContext = () => useContext(applicationContext);

export const ContextProvider = ({children}: ContextChildren) => {
    
    const [names, setNames] = useState<string | null>('sergio');

    return(<applicationContext.Provider value={{name : names, setName : setNames}}>
        {children}
    </applicationContext.Provider>)
}