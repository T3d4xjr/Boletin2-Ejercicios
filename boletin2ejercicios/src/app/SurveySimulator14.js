import { useState } from "react";

export default function SurveySimulator14() {
  const [votosSi, setVotosSi] = useState(0);
  const [votosNo, setVotosNo] = useState(0);
  const [votosTalVez, setVotosTalVez] = useState(0);

  // Calcular el total de votos
  const totalVotos = votosSi + votosNo + votosTalVez;

  // Funciones separadas para calcular el porcentaje de cada opción
  function calcularPorcentajeSi() {
    return totalVotos > 0 ? Math.round((votosSi / totalVotos) * 100) : 0;
  }

  function calcularPorcentajeNo() {
    return totalVotos > 0 ? Math.round((votosNo / totalVotos) * 100) : 0;
  }

  function calcularPorcentajeTalVez() {
    return totalVotos > 0 ? Math.round((votosTalVez / totalVotos) * 100) : 0;
  }

  function incrementarVotosSi() {
    setVotosSi(votosSi + 1);
  }

  function incrementarVotosNo() {
    setVotosNo(votosNo + 1);
  }

  function incrementarVotosTalVez() {
    setVotosTalVez(votosTalVez + 1);
  }

  return (
    <div>
      <h3>Simulador de Encuesta</h3>
      <p>Votos del Sí: {votosSi} ({calcularPorcentajeSi()}%)</p>
      <p>Votos del No: {votosNo} ({calcularPorcentajeNo()}%)</p>
      <p>Votos del Tal vez: {votosTalVez} ({calcularPorcentajeTalVez()}%)</p>
      <p>Total de votos: {totalVotos}</p>

      <button onClick={incrementarVotosSi}>Votar Sí</button>
      <button onClick={incrementarVotosNo}>Votar No</button>
      <button onClick={incrementarVotosTalVez}>Votar Tal vez</button>
    </div>
  );
}
