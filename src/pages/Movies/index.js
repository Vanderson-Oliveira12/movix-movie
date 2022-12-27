import Header from "../../components/Header";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

export default function Movies() {
    return <>
        <Nav />
        <Header />
        <Main type="movie" />
    </>
}