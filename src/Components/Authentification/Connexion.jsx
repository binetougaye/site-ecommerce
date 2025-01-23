import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../context/Provider";
export default function Connexion() {
    const { register, handleSubmit, errors, auth, error } =
        useContext(ContextProvider);
    const onSubmit = (data, e) => {
        e.preventDefault();
        auth(data); // Appel de la fonction de connexion
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Connexion
                </h2>
                {/* Champ e-mail */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Adresse e-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Entrez votre e-mail"
                        required
                        {...register("email", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.firstName?.type === "required" && (
                        <p className="text-red-500 mt-2" role="alert">
                            Le champ prénom est requis
                        </p>
                    )}
                </div>
                {/* Champ mot de passe */}
                <div className="mb-6">
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
                        placeholder="Entrez votre mot de passe"
                        required
                        {...register("password", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-red-500 mt-2" role="alert">
                            Le champ mot de passe est obligatoire
                        </p>
                    )}
                </div>
                {/* Bouton de soumission */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    Connexion
                </button>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}{" "}
                {/* Affichage des erreurs d'authentification */}
                {/* Lien mot de passe oublié */}
                <div className="mt-4 text-center">
                    <Link
                        to="#"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Mot de passe oublié ?
                    </Link>
                </div>
            </form>
        </div>
    );
}
