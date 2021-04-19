import { useState } from 'react';

export default function Personas() {
    const [personas, setPersonas] = useState([])
    const [nombre, setNombre] = useState('')

    const lista = personas.map((p, i) => <li key={i}>{p}</li>)
    const handleClick = () => {
        const array = ([...personas])
        array.push(nombre)
        setPersonas(array)
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    return (
        <>
            <h3 className="my-5">Personas</h3>
            <ul>{lista}</ul>
            <input type="text" onChange={handleChange}/>
            <button className="btn btn-outline-danger" onClick={handleClick}>Agregar Personas</button>
        </>
    );
}
