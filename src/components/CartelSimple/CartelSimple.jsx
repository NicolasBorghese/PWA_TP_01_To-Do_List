import style from "./CartelSimple.module.css";

const CartelSimple = ({mensaje, colorCartel}) => {

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
            {mensaje}
        </div>
    )
}

export default CartelSimple;