import { useState } from "react";
import style from "./BotonCompletar.module.css";

const BotonCompletar = ({tipoBoton, funcion}) => {

    const [estilo, setEstilo] = useState(style.botonCompletar)

    const handleClick = () => {
        funcion();

        if (estilo == style.botonCompletar){
            setEstilo(style.botonReiniciar)
        } else {
            setEstilo(style.botonCompletar)
        }
    }

    return (
        <button className={estilo} onClick={handleClick}>{tipoBoton}</button>
    )
}

export default BotonCompletar;