import { useState } from "react";

export default function AverageCalculator()
{
    //Variable de estado para el input
    const[input, setInput] = useState('');
    //Variable de estado para el total de la cuenta
    const[total, setTotal] = useState(0);
    //Variable de estado para el contador
    const[count, setCount] = useState(0);

    //Funcion para añadir calificacion 
    function handleClick() {
        const calificacion = parseFloat(input);  // Convertimos el valor del input a un número
        if (!isNaN(calificacion)) {  // Verificamos que sea un número válido
          setTotal(total + calificacion);  // Acumulamos el total
          setCount(count + 1);  // Incrementamos el contador
          setInput('');  // Limpiamos el input
        }
      }

    //Función para actualizar
    function actualizar(e)
    {
        setInput(e.target.value);
    }

    //Función para calcular el promedio
    function calcularPromedio(total, count)
    {
        if(count > 0)
        {
            const promedio = total / count;
            return promedio;
        }else
        {
            return 0;
        }
    }

    return(
        <div>
            <input
                type="number"
                value={input}
                onChange={actualizar}
                placeholder="Ingresa una calificación"
            >
            </input>
            <button onClick={handleClick}>Añadir calificación</button>
            <h3>calificaciones ingresadas: {input}</h3>
            <h3>Promedio calculado: {calcularPromedio(total, count)}</h3>
        </div>
    );
}