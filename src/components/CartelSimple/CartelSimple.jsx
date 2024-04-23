import style from "./CartelSimple.module.css";

const CartelSimple = ({descripcion, colorCartel}) => {

    var colorFondo = style.fondoDefault;
    
    switch (colorCartel){
        case "fondoRojo":
            colorFondo = style.fondoRojo;
            break;
        case "fondoCeleste":
            colorFondo = style.fondoCeleste;
            break;
        default:
            colorFondo = style.fondoDefault;
            break;
    }

    return (
        <div className={style.cartelSimple + " " + colorFondo}>
            {descripcion}
        </div>
    )
}

export default CartelSimple;