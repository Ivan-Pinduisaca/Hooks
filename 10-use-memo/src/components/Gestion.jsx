import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
    const [nombre, setNombre] = useState('');
    const asignarGestor = (e) => {
        setNombre(e.target.value);
    }

    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>
            <input type="text" onChange={asignarGestor} placeholder='Introduce tu nombre de gestor' />

            <h2>Listado de empleados</h2>
            <p>Los usuario son gestionados por {nombre} vienen de jsonplaceholder...</p>
            <Empleados />
        </div>
    )
}
