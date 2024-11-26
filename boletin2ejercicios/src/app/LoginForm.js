import { useState } from "react";

export default function LoginForm() {
  // Estado para los valores de los campos de entrada
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Array de usuarios simulados con nombres de usuario y contraseñas
  const usuariosSimulados = [
    { username: "usuario1", password: "password123" },
    { username: "usuario2", password: "abc123" },
    { username: "admin", password: "admin123" }
  ];

  // Función para manejar la validación del formulario
  function manejarLogin(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Buscar si el usuario y la contraseña coinciden con alguno de los usuarios simulados
    const usuarioValido = usuariosSimulados.find(
      (user) => user.username === usuario && user.password === contraseña
    );

    if (usuarioValido) {
      setMensaje("¡Bienvenido!");
    } else {
      setMensaje("Credenciales incorrectas. Intenta nuevamente.");
    }

    // Limpiar los campos de entrada después de la validación
    setUsuario("");
    setContraseña("");
  }

  return (
    <div>
      <h2>Formulario de Login</h2>
      <form onSubmit={manejarLogin}>
        <div>
          <label>
            Nombre de usuario:
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} // Actualizar el nombre de usuario
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} // Actualizar la contraseña
            />
          </label>
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>

      {/* Mostrar el mensaje de validación */}
      <p>{mensaje}</p>
    </div>
  );
}
