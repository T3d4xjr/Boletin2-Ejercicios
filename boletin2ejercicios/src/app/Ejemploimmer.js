import{useImmer} from "use-immer";

const tareasIniciales =[
    {id:1,nombre:"tarea1",completada:false}
]

function Task({tarea,onDelete,onClickCheck}){
    return(
        <div>
            <p style={{display : "inline"}}>{tarea.nombre}</p>
            <input type="checkbox" checked={tarea.completada} onChange={()=>onClickCheck(tarea.id)}/>
            <button onClick={() => onDelete(tarea.id)}>Eliminiar</button>
        </div>
    );
}
export default function TaskList(){
    const[tareasEstado,updateTareasEstado]=useImmer(tareasIniciales)

    function handleDelete(idTask){
        updateTareasEstado(draft =>draft.filter(tarea=> tarea.id !==idTask))
    }
    function handleClickCheck(idTask){
        updateTareasEstado(draft =>{
            draft.map(tarea =>{
            if(tarea.id ==idTask){
            tarea.completada=!tarea.completada
            }
            
        }
        )})
    }
    return(
    <div>
        <h4>Lista tareas</h4>
        {tareasEstado.map(tarea => <Task key={tarea.id} tarea={tarea} 
        onDelete={handleDelete} onClickCheck={handleClickCheck}/>)}
    </div>);
}