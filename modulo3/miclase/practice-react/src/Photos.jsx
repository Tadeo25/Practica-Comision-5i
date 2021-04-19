import CardPhoto from './CardPhoto';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Photos() {

    const [datos, setDatos] = useState([])
    const [count, setCount] = useState(0);

    useEffect(() => {
            getPhotos()
    }, [count])

    const getPhotos = async () => {
        try {
            const photos = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setDatos(photos.data.slice(0, 9));
        } catch (error) {
            console.log(error)

        }
    }

    const cards = datos.map((dato, i) => <CardPhoto data={dato} key={i} />)

    return (
        <>
            <div className="row">
                {cards}
            </div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    );
}
