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

        setTareasTotales(tareasTotales + 1);

        setIdNuevaTarea(prevIdNuevaTarea => {
            return prevIdNuevaTarea + 1
        });
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

        do {

            if(arregloTareas[iter].props.id == idTarea){
                
                if (estaCompleta){
                    arregloTareas.splice(iter, 1, <Tarea key={idTarea} id={idTarea} descripcion={arregloTareas[iter].props.descripcion} estadoRecibido={true} funcionCompletar={arregloTareas[iter].props.funcionCompletar} funcionBorrar={arregloTareas[iter].props.funcionBorrar} />);

                } else {
                    arregloTareas.splice(iter, 1, <Tarea key={idTarea} id={idTarea} descripcion={arregloTareas[iter].props.descripcion} estadoRecibido={false} funcionCompletar={arregloTareas[iter].props.funcionCompletar} funcionBorrar={arregloTareas[iter].props.funcionBorrar} />);

                }
                setArregloTareas(arregloTareas);
            }
            iter++;

        } while (!encontrado && iter < cantElem);
    };

    const borrarTarea = (idTarea, estadoTarea) => {

        setTareasTotales(prevTareasTotales => {
            return prevTareasTotales - 1
        });

        if (estadoTarea){
            setTareasCompletas(prevTareasCompletas => {
                return prevTareasCompletas - 1
            });
        }

        var iter = 0
        var cantElem = arregloTareas.length
        var encontrado = false

        do {
            if(arregloTareas[iter].props.id == idTarea){
                var idIndice = iter;
            }
            iter++;
        } while (!encontrado && iter < cantElem)

        arregloTareas.splice(idIndice, 1);
        setArregloTareas(arregloTareas);
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

                    {tareasTotales == tareasCompletas && <CartelSimple descripcion={sinTarea} tipoCartel={"default"}/>}

                    {
                        (
                            arregloTareas.filter(tarea => tarea.props.descripcion.includes(valorFiltro)).map((tareaEnColeccion) => {
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