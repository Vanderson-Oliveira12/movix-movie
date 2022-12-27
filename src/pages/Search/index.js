import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Container from './style';

import { useEffect, useContext, useMemo } from "react";
import { SearchContext } from "../../context/Search";
import { getSearch } from '../../services/tmdb';

import noImage from '../../assets/image/noimage.png';

import Card from "../../components/Card";
import { useState } from "react";

export default function Search() {

    const imagePath = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);
    const [quantityMovies, setQuantityMovies] = useState([]);
    const { query } = useContext(SearchContext);

    useEffect(() => {
        getSearch(query.get('q'))
            .then(response => {
                const results = response.results;

                const moviesAndTv = results.filter(post => {
                    if (post.media_type !== 'person' && post.overview) {

                        return post;
                    }
                })

                setMovies(moviesAndTv);
                setQuantityMovies(moviesAndTv.length);
            })
    }, [query])

    const queryFormat = useMemo(() => query.get('q').charAt().toUpperCase() + query.get('q').split('').splice(1).join(''), [query])

    return (
        <>
            <Nav />
            <Header />
            <Container>
                <div className="container-more">
                    <h1>Todos <span>
                        ({quantityMovies})
                    </span>
                    </h1>
                    {quantityMovies >= 1 ?
                        <h2>
                            Você pesquisou por: {queryFormat}
                        </h2>

                        :

                        <h2>
                            Não existem resultados para: {queryFormat}
                        </h2>
                    }
                </div>
                <section className="container-movies">
                    {
                        movies.map((post) => {

                            const moviePath = post.poster_path;
                            const movieCover = moviePath != null ? `${imagePath}${moviePath}` : noImage

                            return <Card
                                type={post.type || post.media_type}
                                key={post.id}
                                id={post.id}
                                title={post.title || post.name}
                                image={movieCover}
                                alt={post.title}
                                vote={post.vote_average || 0}
                            />
                        })
                    }
                </section>
            </Container>
        </>
    )
}