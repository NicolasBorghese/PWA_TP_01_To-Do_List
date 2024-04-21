import { useState } from "react";
import style from "./BotonAgregarTarea.module.css";

/**
 * Recibe una función a ejecutar y un valor (true/false) para procesarla
 * 
 * La función recibida se ejecuta al hacer click en este componente
 */
const BotonAgregarTarea = ({onClickHandler, valorFormulario}) => {

    const handleClick = () => {
        onClickHandler(valorFormulario);
    }

    return (
        <button className={style.botonAgregarTarea} onClick={handleClick}>Agregar Tarea</button>
    )
}

export default BotonAgregarTarea;