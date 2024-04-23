import { useState } from "react";
import style from "./Tarea.module.css";
import CartelSimple from "../CartelSimple/CartelSimple";

const Tarea = ({id, mensaje, estadoRecibido, funcionCompletar, funcionBorrar}) => {

    var estadoTarea = "No Completada"
    var estiloFondo = style.completar
    var accionBoton = "Completar";
    var cartelFondo = ("fondoRojo")
    
    if (estadoRecibido){
        
        estadoTarea = "Completada";
        estiloFondo = style.reiniciar;
        accionBoton = "Reiniciar";
        cartelFondo = ("fondoCeleste");
    }
    
    const [estado, setEstado] = useState(estadoRecibido);
    const [estadoTareaTexto, setEstadoTareaTexto] = useState(estadoTarea);
    const [colorFondo, setColorFondo] = useState(estiloFondo);
    const [botonCompletar, setBotonCompletar] = useState(accionBoton);
    const [colorCartel, setColorCartel] = useState(cartelFondo);

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
                <button className={estado ? style.botonReiniciar : style.botonCompletar} onClick={modificarEstado}>{botonCompletar}</button>
                <button className={style.botonBorrar} onClick={borrarTarea}>Borrar</button>
            </div>
            <CartelSimple mensaje={mensaje} colorCartel={colorCartel} />
        </div>
    )
}

export default Tarea;
