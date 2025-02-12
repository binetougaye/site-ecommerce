import { useState } from "react";

export default function FormProduit() {
    const [formProduit, setFormProduit] = useState({
        name: "",
        description: "",
        price: "",
        image: null,
    });

    const [message, setMessage] = useState("");

    // Gestion des changements dans les champs texte
    const handleChange = (e) => {
        setFormProduit({
            ...formProduit,
            [e.target.name]: e.target.value
        });
    };

    // Gestion du changement de fichier
    const handleFileChange = (e) => {
        setFormProduit({
            ...formProduit,
            image: e.target.files[0], // Stocke l'image sélectionnée
        });
    };

    // Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formProduitToSend = new FormData();
        formProduitToSend.append("name", formProduit.name);
        formProduitToSend.append("description", formProduit.description);
        formProduitToSend.append("price", formProduit.price);
        formProduitToSend.append("image", formProduit.image); 

        try {
            const response = await fetch("http://projet-node-js-11.onrender.com/api/produits", {
                method: "POST",
                body: formProduitToSend, // Envoi en `multipart/form-data`
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage("Produit ajouté avec succès !");
            } else {
                setMessage(data.message || "Une erreur est survenue.");
            }
        } catch (error) {
            setMessage("Erreur de connexion au serveur.");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5">Ajout d'un produit</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="px-3">
                <input type="text" name="name" className="p-2 my-5 border border-gray-500 rounded w-full" placeholder="Nom du produit" value={formProduit.name} onChange={handleChange} required />
                <input type="text" name="description" className="p-2 mb-5 border border-gray-500 rounded w-full " placeholder="Description" value={formProduit.description} onChange={handleChange} required />
                <input type="number" name="price" className="p-2 mb-5 border border-gray-500 rounded w-full " placeholder="Prix" value={formProduit.price} onChange={handleChange} required />
                <input type="file" name="image" className="p-2 mb-5 border border-gray-500 rounded " accept="image/*" onChange={handleFileChange} required />
                <div className="flex justify-center mt-5">
                <button type="submit" className="bg-black text-white font-bold p-2 my-3 rounded">Ajouter un Produit</button>
                </div>
            </form>
        </div>
    );
}