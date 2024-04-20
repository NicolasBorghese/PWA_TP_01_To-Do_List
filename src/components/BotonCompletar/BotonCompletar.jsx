import style from "./BotonCompletar.module.css";

const BotonCompletar = ({tipoBoton}) => {

    var estilo = style.botonCompletar

    if (tipoBoton != "Completar"){
        estilo = style.botonReiniciar
    }

    return (
        <button className={estilo}>{tipoBoton}</button>
    )
}

export default BotonCompletar;