import { useState, useEffect } from 'react'
import axios from 'axios';
import CardPhoto from './CardPhoto';
export default function Photos() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        getPhotos()
    }, [])
    const getPhotos = async () => {
        try {
            const photos = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setDatos(photos.data.slice(0, 9));
        } catch (error) {
            console.log(error)
        }
    }
    const cards = datos.map((dato, i) => <CardPhoto data={dato} key={i} />);
    return (
        <div>
            <div className="row">
                {cards}
            </div>
        </div>
    )
}