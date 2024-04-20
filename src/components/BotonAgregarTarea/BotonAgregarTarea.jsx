import { useState } from "react";
import style from "./BotonAgregarTarea.module.css";

const BotonAgregarTarea = () => {

    const [agregar, setAgregar] = useState(false);

    const onClickHandler = () => {

        if (agregar){
            setAgregar(false);
        } else {
            setAgregar(true);
        }
    };

    return (
        <button className={style.botonAgregarTarea} onClick={onClickHandler}>Agregar Tarea</button>
    )
}

export default BotonAgregarTarea;