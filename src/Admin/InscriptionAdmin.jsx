import React, { useState } from "react";

export default function InscriptionAdmin() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    // Gestion des changements dans les champs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://projet-node-js-11.onrender.com/api/inscription/admin-inscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage("Inscription réussie !");
            } else {
                setMessage(data.message || "Une erreur est survenue.");
            }
        } catch (error) {
            setMessage("Erreur de connexion au serveur.");
        }
    };

    return (
        <div className="w-100 md:w-2/3 m-auto">
            <h2 className="text-2xl text-center my-3 font-bold">Inscription Admin</h2>
            {message && <p className="text-red-600">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" name="firstName" placeholder="Prénom" className="py-2 my-2 ps-2 border-2 border-gray-400" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Nom" className="py-2 my-2 ps-2 border-2 border-gray-400" value={formData.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="py-2 my-2 ps-2 border-2 border-gray-400" value={formData.email} onChange={handleChange} required />
                <input type="text" name="number" placeholder="Numéro de telephone" className="py-2 my-2 ps-2 border-2 border-gray-400" value={formData.number} onChange={handleChange} required />
                <input type="password" name="password" className="py-2 my-2 ps-2 border-2 border-gray-400" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
                <button type="submit" className="py-2 px-3 bg-black text-white mt-3 ">S'inscrire</button>
            </form>
        </div>
    );
}
