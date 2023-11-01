import React from 'react'
import { useState } from 'react'
import Card from "./Card";

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        cancion: ''
    })
    const [nombre, setNombre] = useState('')
    const [cancion, setCancion] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        const regexName = /^[^ ]{3,}.*$/;
        if(regexName.test(nombre) && cancion.length > 5){
            setUsuario({nombre, cancion})
            setShow(true)
            setError(false)
            setCancion('')
            setNombre('')
        } else {
            setError(true)
            setShow(false)
        }
       
    }

    return (  
    <div >
        {
        <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            <br />
            <input type="text" placeholder="Ingresa tu canción favorita" value={cancion} onChange={(event) => setCancion(event.target.value)}/>
            <br />
            <button>Enviar</button>
        </form>}

        <br />
        {show && <Card nombre={usuario.nombre} cancion={usuario.cancion} />}
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta.</h5>}
    </div>
  )
};

export default Form;