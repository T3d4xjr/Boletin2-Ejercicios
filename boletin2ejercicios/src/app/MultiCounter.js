import { useState } from "react";

// Componente para cada contador individual
function Counter({ id, onIncrement, onDecrement, onReset, value }) {
  return (
    <div>
      <h3>Contador {id}</h3>
      <p>Valor: {value}</p>
      <button onClick={() => onIncrement(id)}>Incrementar</button>
      <button onClick={() => onDecrement(id)}>Decrementar</button>
      <button onClick={() => onReset(id)}>Reiniciar</button>
    </div>
  );
}

export default function MultiCounter() {
  const [counters, setCounters] = useState([]); // Estado para almacenar los contadores

  // Función para agregar un nuevo contador
  function addCounter() {
    setCounters([
      ...counters,
      { id: counters.length + 1, value: 0 } // Crear un contador con ID único e inicializado a 0
    ]);
  }

  // Función para incrementar el valor de un contador específico
  function increment(id) {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    ));
  }

  // Función para decrementar el valor de un contador específico
  function decrement(id) {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    ));
  }

  // Función para reiniciar el valor de un contador específico
  function reset(id) {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: 0 } : counter
    ));
  }

  return (
    <div>
      <h2>Multi Counter</h2>
      <button onClick={addCounter}>Agregar Contador</button>

      {counters.map(counter => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />
      ))}
    </div>
  );
}
