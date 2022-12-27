import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";


export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <Main type="movie" />
        </>
    )
}