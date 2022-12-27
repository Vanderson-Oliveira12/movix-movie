import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import { Banner } from "../../components/Banner";
import More from "../../components/More";
import { useParams } from "react-router-dom";
import noImagePoster from '../../assets/image/noimage.png';
import noImageBackground from '../../assets/image/bignoimage.png';


export default function Movie() {

    const params = useParams();
    const [dateMovie, setDateMovie] = useState({});

    let imagePath = "https://image.tmdb.org/t/p/original/";


    async function getDateMovie() {
        let url = await `https://api.themoviedb.org/3/movie/${params.id}?api_key=1e049c007e395f150ceb08e474fbf7ca&language=pt-BR`;
        let response = await fetch(url);
        let data = await response.json();

        return data
    };

    useEffect(() => {
        getDateMovie()
            .then(response => {

                const genres = response.genres;
                const date = response.release_date;
                const genresAll = genres.map(genre => genre.name);
                const backdropPath = response.backdrop_path;
                const posterPath = response.poster_path;
                const imageBackgroundPath = backdropPath != null ? `${imagePath}${backdropPath}` : noImageBackground;
                const imagePosterPath = posterPath != null ? `${imagePath}${posterPath}` : noImagePoster;

                console.log(response)

                setDateMovie({
                    title: response.title,
                    imageBanner: imageBackgroundPath,
                    imagePoster: imagePosterPath,
                    description: response.overview,
                    vote: response.vote_average.toFixed(1),
                    date: date.split('-').reverse().join('-'),
                    time: response.runtime,
                    genres: genresAll.join(', ')
                })

            })
    }, [])


    return (
        <>
            <Nav />
            <Banner {...dateMovie} />
            <More type="Filme" {...dateMovie} />
        </>
    )
}