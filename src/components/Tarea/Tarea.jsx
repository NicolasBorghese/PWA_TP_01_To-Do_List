import style from "./Tarea.module.css";

const Tarea = ({descripcion, estado}) => {

    var estadoTarea = "No Completada";
    var estiloColorFondo = style.noCompleta;
    var botonCompletar = "Completar"
    var botonCompletarEstilo = style.botonCompletar

    if(estado){
        estadoTarea = "Completada"
        estiloColorFondo = style.completa;
        botonCompletar = "Reiniciar"
        botonCompletarEstilo = style.botonReiniciar
    }

    return (
        <div className={style.contenedorTarea + " " + estiloColorFondo}>
            <div className={style.opcionesTarea}>
                <div className={style.estadoTarea}>
                    {estadoTarea}
                </div>
                <button className={botonCompletarEstilo}>{botonCompletar}</button>
                <button className={style.botonBorrar}>Borrar</button>
            </div>
            <div className={style.descripcion}>
                {descripcion}
            </div>
        </div>
    )
}

export default Tarea;