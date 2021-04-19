import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as useParams,
} from "react-router-dom";
import { useState, useEffect  } from 'react'
import Axios from "axios";




export default function Details() {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = async () => {
        try {
            const response = await Axios.get(`http://www.omdbapi.com/?i=${idMovie}&apikey=643b00c8`);
            if (response.data.Response === 'False') {
                window.alert('Error en el servidor')
                return;
            }
            setMovie(response.data);
        } catch (error) {
            console.log(error.data);
        }
    }
    return (
        <div>
            <h1>Detalles de Pelicula</h1>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <br />
            <span>{movie.imdbRating}</span>
            <img src={movie.Poster} alt=""></img>
        </div>
    );
}