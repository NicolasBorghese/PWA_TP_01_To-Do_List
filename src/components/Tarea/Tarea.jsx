import { useState } from "react";
import style from "./Tarea.module.css";
import BotonBorrar from "../BotonBorrar/BotonBorrar";
import BotonCompletar from "../BotonCompletar/BotonCompletar";
import CartelSimple from "../CartelSimple/CartelSimple";

const Tarea = ({id, mensaje, funcionCompletar, funcionBorrar}) => {

    const [nuevoEstado, setNuevoEstado] = useState(false);
    const [estadoTarea, setEstadoTarea] = useState("No Completada");
    const [colorFondo, setColorFondo] = useState(style.completar);
    const [botonCompletar, setBotonCompletar] = useState("Completar");
    const [colorCartel, setColorCartel] = useState("fondoRojo");
    
    const modificarEstado = () => {

        if (!nuevoEstado){
            setNuevoEstado(true);
            setEstadoTarea("Completada");
            setColorFondo(style.reiniciar);
            setBotonCompletar("Reiniciar");
            setColorCartel("fondoCeleste");

            funcionCompletar(true);
        } else {
            setNuevoEstado(false);
            setEstadoTarea("No Completada");
            setColorFondo(style.completar);
            setBotonCompletar("Completar");
            setColorCartel("fondoRojo");

            funcionCompletar(false);
        }
    }

    const borrarTarea = () => {
        funcionBorrar(id);     
    }

    return (
        <div className={style.contenedorTarea}>
            <div className={style.opcionesTarea}>
                <div className={`${style.estadoTarea} ${colorFondo}`}>
                    {estadoTarea}
                </div>
                <BotonCompletar tipoBoton={botonCompletar} funcion={modificarEstado}/>
                <BotonBorrar funcionBorrar={borrarTarea}/>
            </div>
            <CartelSimple mensaje={mensaje} colorCartel={colorCartel} />
        </div>
    )
}

export default Tarea;