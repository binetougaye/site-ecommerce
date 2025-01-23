import React, { useState } from 'react'
import { createContext } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
export const ContextProvider = createContext()


export default function Provider({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/inscription",
                data
            );




            console.log(response);
            // toast("Inscription réussie !");
        } catch (error) {
            console.error(
                "Erreur lors de l'envoi :",
                error.response?.data || error.message
            );
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };
    const auth = async (data) => {
        setError(null);
        try {
            const response = await axios.post(
                "http://localhost:8000/api/auth",
                data
            );

            setUser(response)
            console.log(response);
            // toast("Inscription réussie !");
        } catch (error) {
            // if (error.response && error.response.data.message) {
            //     setError(error.response.data.message);
            // } else {
            //     setError("Erreur serveur, veuillez réessayer.");
            // }
            console.log(error.response.data.errors[0].msg);
            setError(error.response.data.errors[0].msg)

        }
    };




    return (
        <ContextProvider.Provider value={{ onSubmit, auth, error, register, handleSubmit, watch, errors }}>
            {children}
        </ContextProvider.Provider>
    )
}
