import React from 'react'


const Card = ({nombre, cancion}) => {
    return <>
        <div>Hola {nombre}!,</div>
        <div>Sabemos que tu canción favorita es:</div>
        <div> {cancion}</div>
    </>
};

export default Card;