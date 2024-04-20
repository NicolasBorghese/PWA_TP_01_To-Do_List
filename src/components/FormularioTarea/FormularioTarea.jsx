import style from "./FormularioTarea.module.css";

const FormularioTarea = () => {

    return (
        <div className={style.contenedorDescripcion}>
            <div className={style.descripcionTarea}> Describa la tarea </div>
            <input type="text"  className={style.inputDescripcion}></input>
            <button className={style.botonAgregar}> + </button>
        </div>
    )
}

export default FormularioTarea;