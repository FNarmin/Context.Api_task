import {createContext, useContext, useState} from "react";
const formContext = createContext();
export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({username: "", email: ""});
    const UpdateFormData = (field, value) => {
     setFormData((prevdata)=>({...prevdata, [field]:value}))
    };
    return (
    <formContext.Provider value={{formData, UpdateFormData}}>
        {children}
    </formContext.Provider>
    )
};
export const useForm = () => {
    return (
        useContext(formContext)
    )
}