import CardArticle from "../components/CardArticle";
import { getStorageArray } from "../utils";
import { useState, useEffect } from 'react'
import Card from "../components/Card";
import Axios from "axios";


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getMovies();
    }, [page])

    const cardMovies = movies.map((movie, i) => <Card title={movie.Title} image={movie.Poster} key={i} />)


    const getMovies = async () => {
        const response = await Axios.get(`http://www.omdbapi.com/?apikey=643b00c8&s=harry&page=${page}`)
        if (response.data.Response === 'False') {
            window.alert('Error en el servidor')
            return;
        }
        setMovies(response.data.Search)

    }

    const handleClick = (count) => {
        setPage(page + count);
    }
    return (
        <div className="container">
            <h3>Peliculas de Harry Potter</h3>
            <p>
                {page}
            </p>
            <button onClick={() => handleClick(1)}>
                Siguiente Pagina
            </button>
            { page > 1 &&
                <button onClick={() => handleClick(-1)}>
                    Anterior Pagina
                </button>
            }
            <div className="row">
                {cardMovies}
            </div>
        </div>
    );
}
