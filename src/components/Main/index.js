import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/ClipLoader";

import MainStyled, { ContainerLoader } from './style';
import Card from '../Card';
import Pagination from '../Pagination';

import getMovies from '../../services/tmdb';

const LIMIT = 12;

export default function Main({ type }) {

    const [movies, setMovies] = useState([]);
    const [quantityMovies, setQuantityMovies] = useState(0);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true)

    let image = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {

        getMovies(type, currentPage)
            .then(response => {
                let results = response.results || [];
                let resultsArr = [];

                results.map(post => {
                    if (type === "movie") {
                        resultsArr.push({
                            type: "movie",
                            id: post.id,
                            title: post.title,
                            image: `${image}${post.poster_path}`,
                            vote: post.vote_average,
                            alt: post.title,
                        })

                    } else if (type === "tv") {
                        resultsArr.push({
                            type: "tv",
                            id: post.id,
                            title: post.name,
                            image: `${image}${post.poster_path}`,
                            vote: post.vote_average,
                            alt: post.name,
                        })
                    }
                })
                setTotal(response.total_results)
                setQuantityMovies(results.length);
                setMovies(resultsArr);
                setIsLoading(false)
            })
    }, [currentPage, quantityMovies]);

    const teste = 1

    return (
        <>

            {
                isLoading ? (
                    <ContainerLoader>
                        <DotLoader
                            loading={isLoading}
                            color="#5A4AF4"
                            speedMultiplier={0.5}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            size={70}
                        />
                    </ContainerLoader>
                )
                    : (
                        <MainStyled>
                            <div className="container-more">
                                <h1>Todos <span>
                                    ({quantityMovies})
                                </span>
                                </h1>
                                <div className="container-pagination">

                                    <Pagination
                                        limit={LIMIT}
                                        total={total}
                                        offset={offset}
                                        setOffset={setOffset}
                                        setCurrentPage={setCurrentPage}
                                    />

                                </div>
                            </div>
                            <section className="container-movies">
                                {
                                    movies.map((post) => {

                                        return <Card
                                            type={post.type}
                                            key={post.id}
                                            id={post.id}
                                            title={post.title}
                                            image={post.image}
                                            alt={post.alt}
                                            vote={post.vote}
                                        />
                                    })
                                }
                            </section>
                        </MainStyled>
                    )
            }
        </>

    )
}