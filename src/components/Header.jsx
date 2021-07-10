import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";

const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {

    const toggleCompletadas = () => {
        setMostrarCompletadas(!mostrarCompletadas)
    }

  return (
    <header className={style.header}>
      <h1 className={style.titulo}>Lista de Tareas</h1>
      {mostrarCompletadas ? (
        <button className={style.boton} onClick={toggleCompletadas}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className={style.icono} />
        </button>
      ) : (
        <button className={style.boton} onClick={toggleCompletadas}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className={style.icono} />
        </button>
      )}
    </header>
  );
};

export default Header;
