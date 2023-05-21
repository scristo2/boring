
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import type { SessionUserType } from "./auth/sessionusertype";
import { dataUserSession } from "./auth/sessionusertype";
type ContextChildren = {

    children : React.ReactNode
}


interface appContext  {

    countCart : SessionUserType,
    setCountCart : Dispatch<SetStateAction<SessionUserType>>,
    lang : string,
    setLang : Dispatch<SetStateAction<string>>,
    isLoading : boolean,
    setIsLoading : Dispatch<SetStateAction<boolean>>
}

 const appContextValue  = {

    countCart : dataUserSession,
    setCountCart : async () => {},
    lang : "",
    setLang : async () => {},
    isLoading : false,
    setIsLoading : async () => {}
}
 const applicationContext = createContext<appContext>(appContextValue);

export const UseContext = () => useContext(applicationContext);

export const ContextProvider = ({children}: ContextChildren) => {
     
    const [countCart, setCountCart] = useState<SessionUserType>(dataUserSession);
    const [lang, setLang] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return(<applicationContext.Provider value={{countCart : countCart, setCountCart : setCountCart, lang : lang, setLang : setLang, isLoading : isLoading, setIsLoading : setIsLoading}}>
        {children}
    </applicationContext.Provider>)
}