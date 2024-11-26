import { useState } from "react";

const usuariosInciales = [{
    id:1,
    nombre:"Juanito",
    mail:"g@gmail.com",
    edad:10
}]

let contadorID =2;

function User({usuario, onDelete}){
    return(
        <div>
            <li>
                <p>Nombre: {usuario.nombre}</p>
                <p>Gmail: {usuario.mail}</p>
                <p>Edad: {usuario.edad}</p>
                <button onClick={() => onDelete(usuario.id)}>Eliminar</button>
            </li>
        </div>
    );
}

export default function UserTable(){

    const [usuariosEstado,setUsuariosEstado]=useState(usuariosInciales);
    const[nuevoNombre,setNuevoNombre]=useState("");
    const[nuevoMail,setnuevoMail]=useState("");
    const[nuevoEdad,setnuevoEdad]=useState(0);
    
    function gestionarAgregarUsuario(e){
        e.preventDefault();
        setUsuariosEstado([...usuariosEstado,{
            id:contadorID++,
            nombre:nuevoNombre,
            mail:nuevoMail,
            edad:nuevoEdad
        }])
        setNuevoNombre("")
        setnuevoEdad("")
        setnuevoMail("")
    }

    function handleDelete(userID){
        setUsuariosEstado(usuariosEstado.filter(
            usuario => usuario.id !==userID
        ))
    }
    return(
        <div>
            <form onSubmit={gestionarAgregarUsuario}>
                <label>Nombre: <input type="text"value={nuevoNombre} onChange={(e)=> setNuevoNombre(e.target.value)}/></label>
                <label>Correo: <input type="email" value={nuevoMail} onChange={(e)=> setnuevoMail(e.target.value)}/></label>
                <label>Edad: <input type="number" value={nuevoEdad}onChange={(e)=> setnuevoEdad(e.target.value)}/></label>
                <input type="submit"  value="Crear"/>
            </form>
            <h3>Usuarios Registrados</h3>
            <ul>{usuariosEstado.map(usuario =>
                <User usuario={usuario} key={usuario.id} onDelete={handleDelete}/>
            )}</ul>
        </div>
    );
}