import { useState } from "react";
import style from "./Home.module.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import BotonAgregarTarea from "../../components/BotonAgregarTarea/BotonAgregarTarea";
import InputBuscarTarea from "../../components/InputBuscarTarea/InputBuscarTarea";
import Tarea from "../../components/Tarea/Tarea";
import FormularioTarea from "../../components/FormularioTarea/FormularioTarea";
import CartelSimple from "../../components/CartelSimple/CartelSimple";

const tituloApp = "To-Do List"
const sinTarea = "No hay tareas pendientes, puede descansar"

var tareasTotales = 0;
var tareasCompletas = 0;

const Home = () =>{

    return (
        <div>
            <TituloPrincipal texto={tituloApp}/>
            <div className={style.contenedor}>
                <div className={style.barraAgregarTareas}>
                    <BotonAgregarTarea />
                    <InputBuscarTarea />
                </div>
                <FormularioTarea />
                <div className={style.contadorTareas}>
                    <div>Tareas Completas: {tareasCompletas}/{tareasTotales}</div>
                </div>
                {tareasTotales == 0 && <CartelSimple mensaje={sinTarea} tipoCartel={"default"}/>}
                <Tarea estado={true} mensaje={"Sacar a pasear al perro"}/>
                <Tarea estado={false} mensaje={"Estudiar React"}/>
            </div>
        </div>
    )
}

export default Home;