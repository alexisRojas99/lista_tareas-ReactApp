import React, { Fragment, useEffect, useState } from "react";
import Header from "./../components/Header";
import Tareas from "./../components/Tareas";
import ListaTareas from './../components/ListaTareas'

const Layout = () => {
  // Obtenemos las tareas guardadas del localstorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

  // Establecemos el estado de las tareas
  const [tareas, setTareas] = useState(tareasGuardadas);
   /* {
      id: 1,
      texto: "Lavar la ropa",
      completada: false
    },
    {
      id: 2,
      texto: "Jugar Valoriant",
      completada: true
    } */
  

  // console.log(tareas)

  // Guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null o contiene un valor
  let configMostrarCompletadas = ''
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true'
  }

  // El estado de tareas completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas)

  // Guardamos el estado por defecto de mostrarCompletadas
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
  },[mostrarCompletadas])

  return (
    <Fragment>
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <Tareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas}/>
    </Fragment>
  );
};

export default Layout;
