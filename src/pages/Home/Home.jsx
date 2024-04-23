import { useState } from "react";
import style from "./Home.module.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import BotonAgregarTarea from "../../components/BotonAgregarTarea/BotonAgregarTarea";
import InputBuscarTarea from "../../components/InputBuscarTarea/InputBuscarTarea";
import FormularioTarea from "../../components/FormularioTarea/FormularioTarea";
import CartelSimple from "../../components/CartelSimple/CartelSimple";
import PieDePagina from "../../components/PieDePagina/PieDePagina";
import Tarea from "../../components/Tarea/Tarea"

const tituloApp = "To-Do List"
const sinTarea = "No hay tareas pendientes, puede descansar"

const Home = () => {

    const [tareasTotales, setTareasTotales] = useState(0);
    const [tareasCompletas, setTareasCompletas] = useState(0);
    const [idNuevaTarea, setIdNuevaTarea] = useState(0);
    const [formularioAgregarTarea, setFormularioAgregarTarea] = useState(false);
    const [arregloTareas, setArregloTareas] = useState([]);
    const [valorFiltro, setValorFiltro] = useState("");

    const activarFormularioAgregarTarea = (valorFormulario) => {
        if (valorFormulario){
            setFormularioAgregarTarea(false);
        } else {
            setFormularioAgregarTarea(true);
        }
    }

    const agregarTarea = (tarea) => {
        arregloTareas.push(tarea);
        setArregloTareas(arregloTareas);
        /*setArregloTareas(prevArregloTareas => {
            return prevArregloTareas.push(tarea)
        })*/
        setTareasTotales(tareasTotales + 1);

        setIdNuevaTarea(prevIdNuevaTarea => {
            return prevIdNuevaTarea + 1
        });

        console.log("Agrego tareas")
        console.log(arregloTareas)
    }

    const completarTarea = (estaCompleta, idTarea) => {
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

        var iter = 0
        var cantElem = arregloTareas.length
        var encontrado = false

        console.log("arreglo de tareas previo a completar Tarea")
        console.log(arregloTareas)

        do {

            if(arregloTareas[iter].props.id == idTarea){

                const nuevoArreglo = [...arregloTareas];

                console.log("previo a un cambio")
                console.log(nuevoArreglo)
                
                if (estaCompleta){
                    nuevoArreglo[iter] = <Tarea key={idTarea} id={idTarea} mensaje={arregloTareas[iter].props.mensaje} estadoRecibido={true} funcionCompletar={arregloTareas[iter].props.funcionCompletar} funcionBorrar={arregloTareas[iter].props.funcionBorrar} />

                } else {

                    nuevoArreglo[iter] = <Tarea key={idTarea} id={idTarea} mensaje={arregloTareas[iter].props.mensaje} estadoRecibido={false} funcionCompletar={arregloTareas[iter].props.funcionCompletar} funcionBorrar={arregloTareas[iter].props.funcionBorrar} />
                }

                console.log("posterior a un cambio")
                console.log(nuevoArreglo)

                /*setArregloTareas(nuevoArreglo)

                setArregloTareas(() => {
                    return nuevoArreglo
                })*/

            }
            iter++;

        } while (!encontrado && iter < cantElem)

    };

    const borrarTarea = (id, estadoTarea) => {

        setTareasTotales(prevTareasTotales => {
            return prevTareasTotales - 1
        });

        if (estadoTarea){
            setTareasCompletas(prevTareasCompletas => {
                return prevTareasCompletas - 1
            });
        }

        /*
        var nuevoArregloBorrado = [...arregloTareas];
        nuevoArregloBorrado = nuevoArregloBorrado.filter(tarea => tarea.props.id != id)
        console.log("nuevo arreglo borrado")
        console.log(nuevoArregloBorrado)
        setArregloTareas(nuevoArregloBorrado);
        */

        setArregloTareas(prevArregloTareas => {
            return prevArregloTareas.filter(tarea => tarea.props.id != id)
        });

        //arregloTareas.push("unString")

        console.log("arreglo de tareas posterior a borrar una tarea");
        console.log(arregloTareas);
    }

    const filtrarTareas = (valor) => {

        setValorFiltro (() => {
            return valor
        })
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

                    {
                        (
                            arregloTareas.filter(tarea => tarea.props.mensaje.includes(valorFiltro)).map((tareaEnColeccion) => {
                                return tareaEnColeccion;
                            })
                        )
                    }

                </div>
            </div>
            <PieDePagina />
        </div>
    )
}

export default Home;