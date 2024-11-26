import { useState } from "react";

export default function ImageGallery({ images }) {
  // Estado para manejar el índice de la imagen actual
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para ir hacia la siguiente imagen
  function siguiente() {
    // Si la imagen actual es la última, volver a la primera
    setIndiceActual((prevIndice) => (prevIndice + 1) % images.length);
  }

  // Función para ir hacia la imagen anterior
  function anterior() {
    // Si estamos en la primera imagen, ir a la última
    setIndiceActual((prevIndice) => (prevIndice - 1 + images.length) % images.length);
  }

  return (
    <div>
      {/* Mostrar la imagen actual */}
      <div>
        <img
          src={images[indiceActual]}
          alt={`Imagen ${indiceActual + 1}`}
        />
      </div>

      {/* Botones para navegar hacia adelante o hacia atrás */}
      <div>
        <button onClick={siguiente}>Anterior</button>
        <button onClick={anterior}>Siguiente</button>
      </div>
    </div>
  );
}
