import style from "./InputBuscarTarea.module.css";

const InputBuscarTarea = ({onChangeHandler}) => {

    const changeHandler = (event) => {
        var valor = event.target.value;
        onChangeHandler(valor);
    }

    return (
        <input className={style.inputBuscarTarea} onChange={changeHandler} type="text" placeholder="Buscar..."></input>
    )
}

export default InputBuscarTarea;