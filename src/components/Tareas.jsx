import React, { useState } from 'react'
import style from './Tareas.module.css'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Tareas = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState('')

    const eventoInput = (e) => {
        setInputTarea(e.target.value)
    }

    const eventoSubmit = (e) => {
        e.preventDefault()

        setTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        ) 

        setInputTarea('')
    }

    return ( 
        <form action="" className={style.formulario} onSubmit={eventoSubmit}>
            <input 
            type="text" 
            className={style.input_tareas}
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => eventoInput(e)}
            />
            <button 
            type="submit"
            className={style.btn}
            >
                <FontAwesomeIcon icon={faPlusSquare} className={style.icono}/>
            </button>
        </form>
     );
}
 
export default Tareas;