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

    const [formularioAgregarTarea, setFormularioAgregarTarea] = useState(false);
    const activarFormularioAgregarTarea = (valorFormulario) => {
        if (valorFormulario){
            setFormularioAgregarTarea(false);
        } else {
            setFormularioAgregarTarea(true);
        }
    }

    const [arregloTareas, setArregloTareas] = useState([]);
    const agregarTarea = (tarea) => {
        arregloTareas.push(tarea);
        setArregloTareas(arregloTareas);
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

    /*const borrarTarea = (id) => {
        var iterTarea = 0;
        var tareaEncontrada = false;
        var cantTareas = arregloTareas.length;
        //var nuevoArreglo = arregloTareas;

        do {

            if(arregloTareas[iterTarea].props.id == id){
                tareaEncontrada = true;
                //nuevoArreglo.splice(iterTarea, 1);
                console.log(arregloTareas);
                //const nuevoArregloTareas = arregloTareas.filter(tarea => tarea.props.id !== id);
                const nuevoArreglo = arregloTareas.splice(iterTarea, 1);
                setArregloTareas(nuevoArreglo);
                console.log(arregloTareas);
            }
            iterTarea++;

        } while (!tareaEncontrada && iterTarea < cantTareas);
    }*/

    /*const borrarTarea = (id) => {
        // Filtrar el arreglo de tareas para excluir la tarea con el ID dado
        const nuevoArregloTareas = arregloTareas.filter(tarea => tarea.props.id !== id);
        console.log("Arreglo De tareas en la función");
        console.log(nuevoArregloTareas)
        // Actualizar el estado arregloTareas con el nuevo arreglo filtrado
        setArregloTareas(nuevoArregloTareas);
    };*/

    /*const borrarTarea = (id) => {
        // Crear una copia del arreglo de tareas
        const nuevoArregloTareas = [...arregloTareas];
        // Encontrar el índice de la tarea con el ID dado
        const indice = nuevoArregloTareas.findIndex(tarea => tarea.props.id === id);
        // Si se encontró la tarea, eliminarla del arreglo
        if (indice !== -1) {
            nuevoArregloTareas.splice(indice, 1);
            // Actualizar el estado con el nuevo arreglo sin la tarea eliminada
            setArregloTareas(nuevoArregloTareas);
        }
    };*/

    const borrarTarea = (id, estadoTarea) => {
        setTareasTotales(prevTareasTotales => {
            return prevTareasTotales - 1
        });
        if (estadoTarea){
            setTareasCompletas(prevTareasCompletas => {
                return prevTareasCompletas - 1
            });
        }
        setArregloTareas(prevArregloTareas => { 
            return prevArregloTareas.filter(n => n.props.id !== id) 
        });
    }

    const [tareasFiltradas, setTareasFiltradas] = useState([]);
    const filtrarTareas = (event) => {
        var valor = event.target.value;
    }

    return (
        <div>
            <div className={style.cuerpoPagina}>
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
                    {console.log("Arreglo de Tareas en Home")}
                    {console.log(arregloTareas)}
                    {arregloTareas.map((tareaEnColeccion) => {
                        return tareaEnColeccion;
                    })}
                </div>
            </div>
            <PieDePagina />
        </div>
    )
}

export default Home;