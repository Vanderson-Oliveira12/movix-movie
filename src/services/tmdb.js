async function getDate(type, nextPagination) {

    /* Type: tv or movie */

    let url = `http://api.themoviedb.org/3/${type}/popular/?api_key=1e049c007e395f150ceb08e474fbf7ca&language=pt-BR&page=${nextPagination}`;
    let response = await fetch(url);
    let data = await response.json()

    return data;
}

export default getDate;

export async function getSearch(query) {
    let url = `http://api.themoviedb.org/3/search/multi?api_key=1e049c007e395f150ceb08e474fbf7ca&language=pt-BR&query=${query}`
    let response = await fetch(url);
    let data = await response.json();

    return data;
}
