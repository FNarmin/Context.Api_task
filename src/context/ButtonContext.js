import { createContext, useContext, useState } from "react";

const buttonContext = createContext();
export const ButtonProvider = ({children}) => {
const[color, setColor] = useState("#D0312D");
const SetColor = () => {
    setColor(color==="#D0312D" ? "#0000ff" : "#D0312D");
};
return(
<buttonContext.Provider value={{color, SetColor}}>
    {children}
</buttonContext.Provider>
)
}
export const useButton = () => {

   return useContext(buttonContext);
};
