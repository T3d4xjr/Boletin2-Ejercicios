import { useState } from "react";

// Lista inicial de productos
const productosIniciales = [
  { id: 1, nombre: "Leche" },
  { id: 2, nombre: "Pan" },
  { id: 3, nombre: "Arroz" }
];


let contadorID = 4; // Continuamos el contador a partir del último ID

function Producto({ producto, onDelete, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false); // Estado para saber si está editando
  const [editValue, setEditValue] = useState(producto.nombre); // Valor del nombre en edición

  function handleSave() {
    onNameChange(producto.id, editValue); // Guardar el nuevo nombre
    setIsEditing(false); // Salir del modo de edición
  }

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)} // Cambiar el valor mientras se edita
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          {producto.nombre}
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
      <button onClick={() => onDelete(producto.id)}>Eliminar</button>
    </li>
  );
}


export default function ShoppingList() {
  const [items, setItems] = useState(productosIniciales);
  const [nuevoElemento, setNuevoElemento] = useState("");

  // Función para agregar un nuevo elemento
  function agregarElemento(e) {
    e.preventDefault();
    if (nuevoElemento === "") {
      alert("Por favor ingrese un nombre para el producto.");
      return;
    }

    setItems([
      ...items,
      { id: contadorID++, nombre: nuevoElemento }
    ]);
    setNuevoElemento(""); // Limpiar el campo de entrada
  }

  // Función para eliminar un elemento
  function eliminarElemento(id) {
    setItems(items.filter(item => item.id !== id)); // Eliminar producto por id
  }

  // Función para cambiar el nombre de un producto
  function cambiarNombre(id, nuevoNombre) {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, nombre: nuevoNombre } : item
      )
    );
  }

  return (
    <div>
      <h3>Lista de Compras</h3>

      {/* Formulario para agregar un nuevo producto */}
      <form onSubmit={agregarElemento}>
        <label>
          Agregar Producto:
          <input
            type="text"
            value={nuevoElemento}
            onChange={(e) => setNuevoElemento(e.target.value)} // Actualizar el estado
          />
        </label>
        <button type="submit">Agregar</button>
      </form>

      {/* Mostrar los productos en la lista */}
      <h4>Productos:</h4>
      <ul>
        {items.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            onDelete={eliminarElemento}
            onNameChange={cambiarNombre} // Pasamos la función para cambiar el nombre
          />
        ))}
      </ul>
    </div>
  );
}

