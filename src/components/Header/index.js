import HeaderStyle from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/Search';

export default function Header() {

    const { searchFilter, setSearchFilter } = useContext(SearchContext)

    /*  */
    /* Sempre definir um valor inicial para o state */

    function searchMovie(){
        return searchFilter !== '' ? `/search?q=${searchFilter}` : '/';
    }

    return (
        <HeaderStyle>
            <div className="header">
                <div className="header-container-text">
                    <h1>Movix</h1>
                    <h2>
                        Tenha a lista dos seus filmes favoritos em apenas uma busca.
                    </h2>
                    <div className="container-input">
                        <div className="header-container-input">
                            <label htmlFor="input-search">
                                <AiOutlineSearch
                                    size={24}
                                />
                            </label>
                            <input 
                            autoComplete="off" 
                            onChange={(e) => setSearchFilter(e.target.value)}
                            value={searchFilter} className="header-input"
                            type="text" id="input-search"
                            placeholder="Pesquise por filmes e séries de TV" />
                        </div>
                        <Link to={searchMovie()}>
                            <p>
                                Pesquisar
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
};
