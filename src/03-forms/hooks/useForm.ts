import { ChangeEvent, FormEvent, useState } from "react";



export const useForm = <T>( InitialValues: T ) => {
    
    const [ formData , setFormData] = useState( InitialValues );


    const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [ name ]: value
        })
    }

    const resetForm = () => {
        setFormData({ ...InitialValues })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log( formData )
    }

    return {
        ...formData,
        formData,

        onChange,
        resetForm,
        onSubmit,
        isValidEmail
    }
} 