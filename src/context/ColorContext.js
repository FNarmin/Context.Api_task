import { createContext, useContext, useState } from "react"

const colorContext = createContext();
export const ColorProvider = ({children}) => {
    const [circleColor, setCircleColor] = useState("#D0312D");
    const SetCircleColor = () => {
        setCircleColor(circleColor==="#D0312D" ? "#0000ff" : "#D0312D");
    }
    return (
        <colorContext.Provider value={{circleColor, SetCircleColor}}>
        {children}
        </colorContext.Provider>
    )
}
export const useColor =() => {
    return useContext(colorContext);
}
