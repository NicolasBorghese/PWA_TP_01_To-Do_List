import style from "./InputBuscarTarea.module.css";

const InputBuscarTarea = ({onChangeHandler}) => {
    return (
        <input className={style.inputBuscarTarea} onChange={onChangeHandler} type="text" placeholder="Buscar..."></input>
    )
}

export default InputBuscarTarea;