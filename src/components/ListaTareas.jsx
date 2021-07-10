import React from "react";
import style from './ListaTareas.module.css'
import Tarea from './Tarea'

const ListaTareas = ({ tareas, setTareas, mostrarCompletadas }) => {

  const tareaCompletada = (id) => {
    setTareas(tareas.map((tarea) => {
      if (tarea.id === id) {
        return {...tarea, completada: !tarea.completada}
      }
      return tarea
    }))
  }

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map((tarea) => {
      if (tarea.id === id) {
        return {...tarea, texto: nuevoTexto}
      }
      return tarea
    }))
  }

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => {
      if (tarea.id !== id) {
        return tarea
      }
      return null
    }))
  }

  return (
    <ul className={style.lista_tareas}>
      {tareas.length > 0
        ? tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea 
              key={tarea.id}
              tarea={tarea}
              tareaCompletada={tareaCompletada}
              editarTarea={editarTarea}
              borrarTarea={borrarTarea}
              />)
          } else if(!tarea.completada) {
            return (
              <Tarea 
              key={tarea.id}
              tarea={tarea}
              tareaCompletada={tareaCompletada}
              editarTarea={editarTarea}
              borrarTarea={borrarTarea}
              />)
          }
          return null
          })
        : <div className={style.mensaje}>No hay tareas agregadas</div>}
    </ul>
  );
};

export default ListaTareas;
