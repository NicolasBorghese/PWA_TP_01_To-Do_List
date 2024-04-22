import { useState } from "react";
import { useRef } from "react";
import style from "./Tarea.module.css";
import BotonBorrar from "../BotonBorrar/BotonBorrar";
import BotonCompletar from "../BotonCompletar/BotonCompletar";
import CartelSimple from "../CartelSimple/CartelSimple";

const Tarea = ({id, mensaje, estadoRecibido, funcionCompletar, funcionBorrar}) => {

    const [estado, setEstado] = useState(false);
    const [estadoTareaTexto, setEstadoTareaTexto] = useState("No Completada");
    const [colorFondo, setColorFondo] = useState(style.completar);
    const [botonCompletar, setBotonCompletar] = useState("Completar");
    const [colorCartel, setColorCartel] = useState("fondoRojo");

    if (estadoRecibido){
        setEstado(true);
        setEstadoTareaTexto("Completada");
        setColorFondo(style.reiniciar);
        setBotonCompletar("Reiniciar");
        setColorCartel("fondoCeleste");
    }
    
    const modificarEstado = () => {

        if (!estado){
            setEstado(true);
            setEstadoTareaTexto("Completada");
            setColorFondo(style.reiniciar);
            setBotonCompletar("Reiniciar");
            setColorCartel("fondoCeleste");

            funcionCompletar(true, id);
        } else {
            setEstado(false);
            setEstadoTareaTexto("No Completada");
            setColorFondo(style.completar);
            setBotonCompletar("Completar");
            setColorCartel("fondoRojo");

            funcionCompletar(false, id);
        }
    }

    const borrarTarea = () => {
        funcionBorrar(id, estado);     
    }

    return (
        <div className={style.contenedorTarea}>
            <div className={style.opcionesTarea}>
                <div className={`${style.estadoTarea} ${colorFondo}`}>
                    {estadoTareaTexto}
                </div>
                <BotonCompletar tipoBoton={botonCompletar} funcion={modificarEstado}/>
                <BotonBorrar funcionBorrar={borrarTarea}/>
            </div>
            <CartelSimple mensaje={mensaje} colorCartel={colorCartel} />
        </div>
    )
}

export default Tarea;