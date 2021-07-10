import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Tarea.css";

const Tarea = ({ tarea, tareaCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, setEdidantoTarea] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

  const eventoSubmit = (e) => {
    e.preventDefault()
    editarTarea(tarea.id, nuevaTarea)
    setEdidantoTarea(false)
  }


  return (
    <li className="tareas">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="tareas_icono icono_check"
        onClick={() => tareaCompletada(tarea.id)}
      />
      <div className="tareas_texto">{
      editandoTarea ? 
      
      <form className="formulario-editar-tarea" onSubmit={eventoSubmit}>
          <input type="text"
          className="formulario-editar-tarea-input"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <button type="submit" className="formulario-editar-tarea-btn">Actualizar</button>
      </form>
      : tarea.texto
      }
      </div>
      <div className="contenedor_botones">
        <FontAwesomeIcon icon={faEdit} className="tareas_icono icono_accion" 
            onClick={() => setEdidantoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon icon={faTimes} className="tareas_icono icono_accion" 
        onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
