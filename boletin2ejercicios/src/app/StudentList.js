import { useState } from "react";


const estudiantesIniciales = [
  { id: 1, nombre: "Ana" },
];

let contadorID = 2;

function Student({ estudiante, onDelete }) {
  return (
    <div>
      <li>
        <p>Nombre: {estudiante.nombre}</p>
        <button onClick={() => onDelete(estudiante.id)}>Eliminar</button>
      </li>
    </div>
  );
}

export default function StudentList() {
  const [estudiantesEstado, setEstudiantesEstado] = useState(estudiantesIniciales);
  const [nuevoNombre, setNuevoNombre] = useState("");

  function AgregarEstudiante(e) {
    e.preventDefault();

    if (nuevoNombre !== "") {
     
      const nuevosEstudiantes = [
        ...estudiantesEstado,
        { id: contadorID++, nombre: nuevoNombre },
      ].map((estudiante) => ({
        ...estudiante,
        nombre: estudiante.nombre,
      }));

      setEstudiantesEstado(nuevosEstudiantes);
      setNuevoNombre("");
    }
  }

  function handleDelete(studentID) {
    setEstudiantesEstado(estudiantesEstado.filter((estudiante) => estudiante.id !== studentID));
  }

  return (
    <div>
      <form onSubmit={AgregarEstudiante}>
        <label>
          Nombre:{" "}
          <input
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </label>
        <input type="submit" value="Agregar estudiante" />
      </form>
      <h3>Lista de Estudiantes</h3>
      <ul>
        {estudiantesEstado.map((estudiante) => (
          <Student
            estudiante={estudiante}
            key={estudiante.id}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
