import React, { useState, useEffect } from "react";
import { ElementTestimonials } from "./ElementTestimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changer l'élément actif toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ElementTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 ms = 3 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lorsqu'on quitte le composant
  }, []);

  // Fonction pour changer l'élément actif via les points
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="p-20 mb-5">
      {/* Titre */}
      <p className="text-center text-gray-400 font-bold">People Says</p>
      <p className="text-3xl font-bold text-center mb-8">Testimonials</p>

      {/* Conteneur du carrousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {ElementTestimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full text-center"
              style={{ minWidth: "100%" }}
            >
              <img
                src={item.img}
                alt="img"
                className="object-cover rounded-full mx-auto mb-4"
                style={{ width: "200px", height: "200px" }}
              />
              <p className="font-sans font-light text-3xl mb-2 md:px-20">
                "{item.text}"
              </p>
              <p className="font-bold">{item.nom}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Points de navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {ElementTestimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
