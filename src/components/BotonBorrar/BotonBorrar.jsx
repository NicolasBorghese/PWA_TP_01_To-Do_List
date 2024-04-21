import style from "./BotonBorrar.module.css";

const BotonBorrar = ({funcionBorrar}) => {

    const handleClick = () => {
        funcionBorrar()
    }

    return (
        <button className={style.botonBorrar} onClick={handleClick}>Borrar</button>
    )
}

export default BotonBorrar;