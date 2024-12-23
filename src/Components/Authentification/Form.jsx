import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/inscription",
                data
            );
            console.log("Données envoyées avec succès :", response.data);
            alert("Inscription réussie !");
        } catch (error) {
            console.error(
                "Erreur lors de l'envoi :",
                error.response?.data || error.message
            );
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Inscription
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            htmlFor="prenom"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="prenom"
                            name="firstName"
                            {...register("firstName", { required: true })}
                            placeholder="Votre prénom"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.firstName?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ prénom est requis
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="nom"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nom
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="lastName"
                            {...register("lastName", { required: true })}
                            placeholder="Votre nom"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.lastName?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ nom est requis
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email", { required: true })}
                            placeholder="Votre email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.email?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ email est requis
                            </p>
                        )}
                    </div>

                    {/* Numéro */}
                    <div className="mb-4">
                        <label
                            htmlFor="numero"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Numéro
                        </label>
                        <input
                            type="number"
                            id="numero"
                            name="number"
                            {...register("number", { required: true })}
                            placeholder="Votre numéro de téléphone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.number?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ téléphone est obligatoire
                            </p>
                        )}
                    </div>

                    {/* Mot de passe */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register("password", { required: true })}
                            placeholder="Votre mot de passe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ mot de passe est obligatoire
                            </p>
                        )}
                    </div>

                    {/* Confirmer mot de passe */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Confirmer mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            {...register("confirmPassword", { required: true })}
                            placeholder="Confirmez votre mot de passe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {errors.confirmPassword?.type === "required" && (
                            <p className="text-red-500 mt-2" role="alert">
                                Le champ confirmer mot de passe est obligatoire
                            </p>
                        )}
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
