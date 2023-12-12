import { createContext, useContext, useState } from "react";

const lockingContext = createContext();
export const LockingProvider = ({children}) => {
    const [lock, setLock] = useState("on");

const SetLock = () => {
    setLock(lock==="on" ? "off" : "on");
    console.log(lock);
};
return (
    <lockingContext.Provider value={{lock, SetLock}}>
        {children}
    </lockingContext.Provider>
)
}
export const useLock = () => {
   return  useContext(lockingContext);
}