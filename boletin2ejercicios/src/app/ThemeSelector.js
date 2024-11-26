import { useState } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("light"); // Estado para manejar el tema seleccionado

  // Función para manejar el cambio de tema
  function handleThemeChange(selectedTheme) {
    setTheme(selectedTheme);
  }

  // Estilos condicionales para los temas
  const themes = {
    light: { backgroundColor: "#ffffff", color: "#000000" },
    dark: { backgroundColor: "#333333", color: "#ffffff" },
    colorful: { backgroundColor: "linear-gradient(90deg, #ff7eb3, #ff758c)", color: "#000000" }
  };

  return (
    <div style={{ ...themes[theme]}}>
      <h1>Selector de Temas</h1>
      <p>Elige un tema para cambiar el estilo del componente:</p>

      <button onClick={() => handleThemeChange("light")}>Claro</button>
      <button onClick={() => handleThemeChange("dark")}>Oscuro</button>
      <button onClick={() => handleThemeChange("colorful")}>Colorido</button>

      <p>El tema actual es: <strong>{theme}</strong></p>
    </div>
  );
}
