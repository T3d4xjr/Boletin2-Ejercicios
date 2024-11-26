import { useState } from "react";

export default function GuessTheNumber() {
  const [randomNumber] = useState(() => Math.floor(Math.random() * 100) + 1); // Generar número aleatorio entre 1 y 100
  const [guess, setGuess] = useState(""); // Estado para almacenar la entrada del usuario
  const [feedback, setFeedback] = useState(""); // Estado para el mensaje de retroalimentación
  const [attempts, setAttempts] = useState(0); // Contador de intentos

  // Manejar la adivinanza del usuario
  function handleGuess() {
    const numGuess = parseInt(guess, 10);

    if (isNaN(numGuess)) {
      setFeedback("Por favor, ingresa un número válido.");
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (numGuess === randomNumber) {
      setFeedback("¡Correcto! ¡Adivinaste el número!");
    } else if (numGuess < randomNumber) {
      setFeedback("Demasiado bajo. Intenta de nuevo.");
    } else {
      setFeedback("Demasiado alto. Intenta de nuevo.");
    }

    setGuess(""); // Limpiar el campo de entrada después de cada intento
  }

  return (
    <div>
      <h1>Adivina el Número</h1>
      <p>Intenta adivinar un número entre 1 y 100.</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Tu adivinanza"
      />
      <button onClick={handleGuess}>Adivinar</button>
      <p>{feedback}</p>
      <p>Intentos: {attempts}</p>
    </div>
  );
}
