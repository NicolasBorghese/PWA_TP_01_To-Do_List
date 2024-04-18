import { useState } from "react";
import style from "./Home.module.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import BotonAgregarTarea from "../../components/BotonAgregarTarea/BotonAgregarTarea";
import InputBuscarTarea from "../../components/InputBuscarTarea/InputBuscarTarea";
import Tarea from "../../components/Tarea/Tarea";
import SinTareas from "../../components/SinTareas/SinTareas";

const tituloApp = {
    texto: "To-Do List"
}

var tareasTotales = 10;
var tareasCompletas = 5;

const Home = () =>{

    return (
        <div>
            <TituloPrincipal texto={tituloApp.texto}/>
            <div className={style.contenedor}>
                <div className={style.cabezalTareas}>
                    <BotonAgregarTarea />
                    <InputBuscarTarea />
                </div>
                <div className={style.contadores}>
                    <div>Tareas Totales: {tareasTotales}</div>
                    <div>Tareas Completas: {tareasCompletas}</div>
                </div>
                <Tarea estado={true} descripcion={"Sacar a pasear al perro"}/>
                <Tarea estado={false} descripcion={"Estudiar React"}/>
                <SinTareas />
            </div>
        </div>
    )
}

export default Home;