import style from "./TituloPrincipal.module.css";

const TituloPrincipal = ({texto}) => {

    return(
        <div>
            <h1 className={style.tituloPrincipal}>{texto}</h1>
        </div>
    )
}

export default TituloPrincipal;