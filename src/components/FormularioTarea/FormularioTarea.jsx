import { useState } from "react";
import Tarea from "../Tarea/Tarea";
import style from "./FormularioTarea.module.css";

const FormularioTarea = ({onClickHandler, idNuevaTarea, funcionCompletar, funcionBorrar}) => {

    const [descripcion, setDescripcion] = useState('');

    const handleChange = (event) => {
        setDescripcion(event.target.value);
    }

    const handleClick = () => {
        const nuevaTarea = <Tarea key={idNuevaTarea} id={idNuevaTarea} descripcion={descripcion} estadoRecibido={false} funcionCompletar={funcionCompletar} funcionBorrar={funcionBorrar}/>
        onClickHandler(nuevaTarea);
        setDescripcion("");
    }

    return (
        <div className={style.contenedorDescripcion}>
            <div className={style.descripcionTarea}> Describa la tarea </div>
            <input type="text" className={style.inputDescripcion} onChange={handleChange} value={descripcion}></input>
            <button type="submit" className={style.botonAgregar} onClick={handleClick}> + </button>
        </div>
    )
}

export default FormularioTarea;