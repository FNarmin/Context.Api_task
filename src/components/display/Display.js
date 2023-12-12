import { useEffect } from "react";
import { useButton } from "../../context/ButtonContext";
import { useColor } from "../../context/ColorContext";
import { useForm } from "../../context/FormContext";
import { useLock } from "../../context/LockingContext";
import style from "./display.module.css";
export default function Display () {
    const {formData} = useForm();
    const {color, SetColor} = useButton();
    const {lock, SetLock} = useLock();
    const {circleColor, SetCircleColor} = useColor();
    const changeColor = () => {
     return lock==="on" ? SetCircleColor() :null;
    }
    useEffect(()=>{
     SetLock()
    }, [SetCircleColor])
    return (
        <div className={style.wrapper}>
        <h2>Display</h2>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <button onClick={SetColor} style={{backgroundColor: color, color: "#fff", width:"100px"}}>change</button>
        <p>Power: {lock}</p>
        <p>Color: {circleColor==="#D0312D" ? "red" : "blue"}</p>
        <div className={style.buttons}>
            <button className="btn btn-primary" onClick={SetLock}>Lock and Unlock</button>
            <button className="btn btn-info" onClick={changeColor}>Change Color</button>
        </div>
        <div style={{backgroundColor: circleColor}} className={style.circle}></div>
        </div>
    )
}