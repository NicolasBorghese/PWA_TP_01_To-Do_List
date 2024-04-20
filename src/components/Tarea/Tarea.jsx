import style from "./Tarea.module.css";
import BotonBorrar from "../BotonBorrar/BotonBorrar";
import BotonCompletar from "../BotonCompletar/BotonCompletar";
import CartelSimple from "../CartelSimple/CartelSimple";

const Tarea = ({estado, mensaje}) => {

    var estadoTarea = "No Completada"
    var colorFondo = style.completar
    var botonCompletar = "Completar"
    var colorCartel = "fondoRojo"

    if(estado){
        estadoTarea = "Completada"
        colorFondo = style.reiniciar
        botonCompletar = "Reiniciar"
        colorCartel = "fondoCeleste"

    }

    return (
        <div className={style.contenedorTarea}>
            <div className={style.opcionesTarea}>
                <div className={style.estadoTarea + " " + colorFondo}>
                    {estadoTarea}
                </div>
                <BotonCompletar tipoBoton={botonCompletar} />
                <BotonBorrar />
            </div>
            <CartelSimple mensaje={mensaje} colorCartel={colorCartel} />
        </div>
    )
}

export default Tarea;