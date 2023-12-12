import React from "react";
import { useForm } from "../../context/FormContext";
import { useButton } from "../../context/ButtonContext";
const Form = () => {
    const {formData, UpdateFormData} = useForm();
    console.log(formData);
    const onChangeInput = (e) => {
        const{name, value} = e.target;
        UpdateFormData(name, value);
    }
    return (
        <div>
            <h2>Form</h2>
            <form>
                <input type="text" name="username" placeholder="username" onChange={onChangeInput}
                value={formData.username}/>
                <input type="email" name="email" placeholder="email" onChange={onChangeInput}
                value={formData.email}/>
            </form>
        </div>
    )
}
export default Form;