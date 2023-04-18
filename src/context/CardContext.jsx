import React, {createContext,useState} from "react";

export const CardContext = React.createContext();


export const CardProvider = ({children}) =>{
    const[card,setCard]=useState([]);
    const value = {
        card,
        setCard
    }
    return <CardContext.Provider value={value}>{children}</CardContext.Provider>

}