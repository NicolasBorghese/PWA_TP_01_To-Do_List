import { useState } from "react";
import style from "./Home.module.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import BotonAgregarTarea from "../../components/BotonAgregarTarea/BotonAgregarTarea";
import InputBuscarTarea from "../../components/InputBuscarTarea/InputBuscarTarea";
import FormularioTarea from "../../components/FormularioTarea/FormularioTarea";
import CartelSimple from "../../components/CartelSimple/CartelSimple";
import PieDePagina from "../../components/PieDePagina/PieDePagina";

const tituloApp = "To-Do List"
const sinTarea = "No hay tareas pendientes, puede descansar"

const Home = () => {

    const [tareasTotales, setTareasTotales] = useState(0);
    const [tareasCompletas, setTareasCompletas] = useState(0);
    const [idNuevaTarea, setIdNuevaTarea] = useState(0);

    const [arregloTareas, setArregloTareas] = useState([]);
    const agregarTarea = (tarea) => {
        var tareasActuales = arregloTareas;
        tareasActuales.push(tarea);
        setArregloTareas(tareasActuales);
        setTareasTotales(tareasTotales + 1);
        setIdNuevaTarea(idNuevaTarea + 1);
    }

    /*const completarTarea = (estaCompleta) => {
        if(estaCompleta){
            console.log("Sumo +1")
            setTareasCompletas(tareasCompletas + 1);
            console.log(tareasCompletas)
        } else {
            setTareasCompletas(tareasCompletas - 1);
            console.log("Resto -1")
            console.log(tareasCompletas)
        }
        console.log(tareasCompletas)
    }*/

    const completarTarea = (estaCompleta) => {
        /*
        La lógica detrás de esta estructura es utilizar la versión de la función setState que acepta una función como argumento en lugar de un valor directo. Esta función de actualización del estado recibe el estado anterior como argumento y devuelve el nuevo estado.
        */
        setTareasCompletas(prevTareasCompletas => {
            if (estaCompleta) {
                return prevTareasCompletas + 1;
            } else {
                return prevTareasCompletas - 1;
            }
        });
    };

    const borrarTarea = (id) => {
        var iterTarea = 0;
        var tareaEncontrada = false;
        var cantTareas = arregloTareas.length;
        //var nuevoArreglo = arregloTareas;

        do {

            if(arregloTareas[iterTarea].props.id == id){
                tareaEncontrada = true;
                //nuevoArreglo.splice(iterTarea, 1);
                console.log("1" + arregloTareas);
                //const nuevoArregloTareas = arregloTareas.filter(tarea => tarea.props.id !== id);
                const nuevoArreglo = arregloTareas.splice(iterTarea, 1);
                setArregloTareas(nuevoArreglo);
                console.log("2" + arregloTareas);
            }
            iterTarea++;

        } while (!tareaEncontrada && iterTarea < cantTareas);
    }

    const [tareasFiltradas, setTareasFiltradas] = useState([]);
    const filtrarTareas = (event) => {
        var valor = event.target.value;
    }

    const [formularioAgregarTarea, setFormularioAgregarTarea] = useState(false);
    const activarFormularioAgregarTarea = (valorFormulario) => {
        if (valorFormulario){
            setFormularioAgregarTarea(false);
        } else {
            setFormularioAgregarTarea(true);
        }
    }

    return (
        <div>
            <TituloPrincipal texto={tituloApp}/>
            <div className={style.contenedor}>
                <div className={style.barraAgregarTareas}>
                    <BotonAgregarTarea onClickHandler={activarFormularioAgregarTarea} valorFormulario={formularioAgregarTarea}/>
                    <InputBuscarTarea onChangeHandler={filtrarTareas}/>
                </div>
                {formularioAgregarTarea && <FormularioTarea onClickHandler={agregarTarea} idNuevaTarea={idNuevaTarea} funcionCompletar={completarTarea} funcionBorrar={borrarTarea}/>}
                <div className={style.contadorTareas}>
                    <div>Tareas Completas: {tareasCompletas}/{tareasTotales}</div>
                </div>
                {tareasTotales == tareasCompletas && <CartelSimple mensaje={sinTarea} tipoCartel={"default"}/>}
                {arregloTareas.map((tareaEnColeccion) => {
                    return tareaEnColeccion;
                })}
            </div>
            <PieDePagina />
        </div>
    )
}

export default Home;