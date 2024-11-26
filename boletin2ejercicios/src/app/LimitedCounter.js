import { useState } from "react";

export default function LimitedCounter(){
    const [contador,setContador]=useState(0);
    const [maximo,setMaximo]=useState(25);
    const [nuevoMaximo, setNuevoMaximo] = useState("");

    function incrementarContador(){
        if(contador<maximo){
            setContador(contador +1 )
        }
    }
    function reiniciarContador(){
        setContador(0)
    }
    function actualizarMaximo(e) {
        e.preventDefault();
    
        const valor = +nuevoMaximo;
        if (typeof valor === "number" && valor >= 0) {
          setMaximo(valor);
          if (contador > valor) {
            setContador(valor); 
          }
          setNuevoMaximo("");
        }
      }

    return(
        <div>
            <p>Contador: {contador}</p>
            <p>Maximo: {maximo}</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={reiniciarContador}>Reiniciar</button>
            <form onSubmit={actualizarMaximo}>
            <label>
            Establece un maximo:{" "}
            <input
                type="number"
                value={nuevoMaximo}
                onChange={(e) => setNuevoMaximo(e.target.value)}
            />
            </label>
            <input type="submit" value="Actualizar maximoContador" />
            </form>
        </div> 
    );
}