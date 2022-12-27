import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();

export function SearchProvider({ children }) {

    const [searchFilter, setSearchFilter] = useState('');
    const [ query ] = useSearchParams();


    return (
        <SearchContext.Provider value={{
            searchFilter,
            setSearchFilter,
            query
        }}>
            {children}
        </SearchContext.Provider>
    )
}