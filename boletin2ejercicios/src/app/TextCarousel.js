import { useState } from "react";

export default function TextCarousel({ frases }) {
  // Usamos el estado para manejar el índice de la frase actual
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para mostrar la siguiente frase
  function siguienteFrase() {
    setIndiceActual((prevIndice) => (prevIndice + 1) % frases.length);
  }

  // Función para mostrar la frase anterior
  function anteriorFrase() {
    setIndiceActual(
      (prevIndice) => (prevIndice - 1 + frases.length) % frases.length
    );
  }

  return (
    <div>
      <p>{frases[indiceActual]}</p>
      <button onClick={anteriorFrase}>Anterior</button>
      <button onClick={siguienteFrase}>Siguiente</button>
    </div>
  );
}
