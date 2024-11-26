"use client";
import Ejercicio1 from "./StudentList";
import Ejercicio2 from "./LimitedCounter";
import Ejercicio3 from "./AverageCalculator";
import Ejercicio4 from "./SurveySimulator";
import Ejercicio5 from "./ShoppingList";
import Ejercicio6 from "./LoginForm";
import Ejercicio7 from "./ImageGallery";
import Ejercicio8 from "./MultiCounter"
import Ejercicio9Clase from "./UserTable";
import Ejercicio10 from "./GuessTheNumber";
import Ejercicio12 from "./ThemeSelector";
import Ejercicio13 from "./LiveValidationForm";
import Ejercicio14 from "./SurveySimulator14";
import Ejercicio15 from "./TextCarousel"
import EjemploImmer from "./Ejemploimmer";

export default function Home() {
  const images = [
    "/pikachu.jpeg", 
    "/fotoprueba.jpeg",
    "/pikachu.jpeg"
  ];
  const frases = [
    "Frase1",
    "Frase2",
    "Frase3",
    "Frase4",
    "Frase5"
  ];

  return (
    <div>
      <h1>Ejercicio1</h1>
      <Ejercicio1 />
      <h1>Ejercicio2</h1>
      <Ejercicio2 />
      <h1>Ejercicio3</h1>
      <Ejercicio3 />
      <h1>Ejercicio4</h1>
      <Ejercicio4 />
      <h1>Ejercicio5</h1>
      <Ejercicio5 />
      <h1>Ejercicio6</h1>
      <Ejercicio6 />
      <h1>Ejercicio7</h1>
      <Ejercicio7 images={images} />
      <h1>Ejercicio8</h1>
      <Ejercicio8 />
      <h1>Ejercicio9</h1>
      <Ejercicio9Clase />
      <h1>Ejercicio10</h1>
      <Ejercicio10/>
      <h1>Ejercicio11(No realizar )</h1>
      <h1>Ejercicio12</h1>
      <Ejercicio12/>
      <h1>Ejercicio13</h1>
      <Ejercicio13 />
      <h1>Ejercicio14</h1>
      <Ejercicio14 />
      <h1>Ejercicio15</h1>
      <Ejercicio15 frases={frases} />
      <h1>Ejercicios Extra</h1>
      <EjemploImmer />
      
    </div>
  );
}
