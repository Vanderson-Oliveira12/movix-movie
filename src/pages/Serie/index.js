import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import { Banner } from "../../components/Banner";
import More from "../../components/More";
import { useParams } from "react-router-dom";

export default function Serie() {

    const params = useParams();
    const [dateTv, setDateTv] = useState({});

    let imagePath = "https://image.tmdb.org/t/p/original/"

    async function getDateTv() {
        let url = await `https://api.themoviedb.org/3/tv/${params.id}?api_key=1e049c007e395f150ceb08e474fbf7ca&language=pt-BR`;
        let response = await fetch(url);
        let data = await response.json();

        return data
    };

    useEffect(() => {
        getDateTv()
            .then(response => {

                let dateFormat = response.first_air_date.split('-').reverse().join('-');

                let genres = response.genres.map(genre => {
                    return genre.name
                })

                setDateTv({
                    title: response.name,
                    imagePoster: `${imagePath}${response.poster_path}`,
                    imageBanner: `${imagePath}${response.backdrop_path}`,
                    description: response.overview,
                    vote: response.vote_average.toFixed(1),
                    date: dateFormat,
                    genres: genres.join(', '),
                    episodes: response.number_of_episodes,
                })


            })
    }, [])


    return (
        <>
            <Nav />
            <Banner {...dateTv} />
            <More type="Serie" {...dateTv} />
        </>
    )
}