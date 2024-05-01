import style from "./TituloPrincipal.module.css";

const TituloPrincipal = ({ texto }) => {
  //El div no es necesario
  return (
    <div>
      <h1 className={style.tituloPrincipal}>{texto}</h1>
    </div>
  );
};

export default TituloPrincipal;
