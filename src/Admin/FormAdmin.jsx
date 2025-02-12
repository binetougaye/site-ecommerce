import { useState } from "react";

export default function FormAdmin() {
  const [formAdmin, setFormAdmin] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormAdmin({
      ...formAdmin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formAdminToSend = new FormData();
    formAdminToSend.append("email", formAdmin.email);
    formAdminToSend.append("password", formAdmin.password);

    try {
      const response = await fetch(
        "http://projet-node-js-11.onrender.com/api/admin/create-default-admin",
        {
          method: "POST",
          body: formAdminToSend, // Envoi en `multipart/form-data`
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Admin ajouté avec succès !");
      } else {
        setMessage(data.message || "Une erreur est survenue.");
      }
    } catch (error) {
      setMessage("Erreur de connexion au serveur.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Créer un Admin</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="px-3">
        <input
          type="email"
          name="email"
          className="p-2 my-5 border border-gray-500 rounded w-full"
          placeholder="email de l'admin"
          value={formAdmin.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="p-2 mb-5 border border-gray-500 rounded w-full"
          placeholder="Mot de passe"
          value={formAdmin.password}
          onChange={handleChange}
          required
        />
        <div className="flex justify-center mt-5">
          <button type="submit" className="bg-black text-white font-bold p-2 my-3 rounded">
            Créer un Admin
          </button>
        </div>
      </form>
    </div>
  );
}
