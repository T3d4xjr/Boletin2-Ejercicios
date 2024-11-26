import { useState } from "react";

export default function LiveValidationForm() {
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoMail, setNuevoMail] = useState("");
  const [nuevoEdad, setNuevoEdad] = useState("");
  const [nombreCorrecto, setNombreCorrecto] = useState(false);
  const [emailCorrecto, setEmailCorrecto] = useState(false);
  const [contraseñaCorrecta, setContraseñaCorrecta] = useState(false);

  const [mensajeErrorNombre, setMensajeErrorNombre] = useState("");
  const [mensajeErrorEmail, setMensajeErrorEmail] = useState("");
  const [mensajeErrorContraseña, setMensajeErrorContraseña] = useState("");

  function validarFormulario(e) {
    e.preventDefault();
    if (nombreCorrecto && emailCorrecto && contraseñaCorrecta) {
      alert("Formulario enviado correctamente");
    } else {
      alert("Por favor, revisa los campos del formulario.");
    }
  }

  function validaNombre(e) {
    const posibleNombre = e.target.value;

    if (posibleNombre === "") {
      setMensajeErrorNombre("Debes escribir algo.");
      setNombreCorrecto(false);
    } else if (posibleNombre.length > 10) {
      setMensajeErrorNombre("Demasiado largo.");
      setNombreCorrecto(false);
    } else {
      setNombreCorrecto(true);
      setMensajeErrorNombre("");
    }

    setNuevoNombre(posibleNombre);
  }

  function validaEmail(e) {
    const posibleEmail = e.target.value;

    // Expresión regular para validar emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (posibleEmail === "") {
      setMensajeErrorEmail("Debes escribir un correo electrónico.");
      setEmailCorrecto(false);
    } else if (!emailRegex.test(posibleEmail)) {
      setMensajeErrorEmail("El formato del correo es inválido.");
      setEmailCorrecto(false);
    } else {
      setEmailCorrecto(true);
      setMensajeErrorEmail("");
    }

    setNuevoMail(posibleEmail);
  }

  function validaContraseña(e) {
    const posibleContraseña = e.target.value;

    if (posibleContraseña.length < 6) {
      setMensajeErrorContraseña("La contraseña debe tener al menos 6 caracteres.");
      setContraseñaCorrecta(false);
    } else {
      setContraseñaCorrecta(true);
      setMensajeErrorContraseña("");
    }

    setNuevoEdad(posibleContraseña);
  }

  return (
    <div>
      <form onSubmit={validarFormulario}>
        <label>
          Nombre:
          <input type="text" value={nuevoNombre} onChange={validaNombre} />
        </label>
        <p>{mensajeErrorNombre}</p>

        <label>
          Email:
          <input type="text" value={nuevoMail} onChange={validaEmail} />
        </label>
        <p>{mensajeErrorEmail}</p>

        <label>
          Contraseña:
          <input type="password" value={nuevoEdad} onChange={validaContraseña} />
        </label>
        <p>{mensajeErrorContraseña}</p>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
