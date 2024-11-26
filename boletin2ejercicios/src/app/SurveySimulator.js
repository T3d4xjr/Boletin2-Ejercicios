import { useState } from "react";

export default function SurveySimulator() {
    
    const [incrementarSi, setIncrementarSi] = useState(0);
    const [incrementarNo, setIncrementarNo] = useState(0);
    const [incrementarTalVez, setIncrementarTalVez] = useState(0);

    // Funciones para incrementar los valores de votos
    function incrementoVotosSi() {
        setIncrementarSi(incrementarSi + 1);
    }

    function incrementoVotosNo() {
        setIncrementarNo(incrementarNo + 1);
    }

    function incrementoVotosTalVez() {
        setIncrementarTalVez(incrementarTalVez + 1);
    }

    return (
        <div>
            <p>Votos del sí: {incrementarSi}</p>
            <p>Votos del no: {incrementarNo}</p>
            <p>Votos del Tal vez: {incrementarTalVez}</p>

            <button onClick={incrementoVotosSi}>Incrementar Votos Sí</button>
            <button onClick={incrementoVotosNo}>Incrementar Votos No</button>
            <button onClick={incrementoVotosTalVez}>Incrementar Votos Tal vez</button>
        </div>
    );
}
