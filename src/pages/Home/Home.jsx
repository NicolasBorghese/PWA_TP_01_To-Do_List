import { useState } from "react";
import style from "./Home.module.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import BotonAgregarTarea from "../../components/BotonAgregarTarea/BotonAgregarTarea";
import InputBuscarTarea from "../../components/InputBuscarTarea/InputBuscarTarea";
import Tarea from "../../components/Tarea/Tarea";
import SinTareas from "../../components/SinTareas/SinTareas";
import FormularioTarea from "../../components/FormularioTarea/FormularioTarea";

const tituloApp = {
    texto: "To-Do List"
}

var tareasTotales = 0;
var tareasCompletas = 0;

const Home = () =>{

    return (
        <div>
            <TituloPrincipal texto={tituloApp.texto}/>
            <div className={style.contenedor}>
                <div id="cabezalTareas" className={style.cabezalTareas}>
                    <BotonAgregarTarea />
                    <InputBuscarTarea />
                </div>
                <FormularioTarea />
                <div className={style.contadores}>
                    <div>Tareas Totales: {tareasTotales}</div>
                    <div>Tareas Completas: {tareasCompletas}</div>
                </div>
                {tareasTotales == 0 && <SinTareas />}
                <Tarea estado={true} descripcion={"Sacar a pasear al perro"}/>
                <Tarea estado={false} descripcion={"Estudiar React"}/>
            </div>
        </div>
    )
}

export default Home;