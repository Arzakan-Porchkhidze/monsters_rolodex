import React from "react";
import "./search.css";


const Search = ({setSearchField, placeholder}) => {
    return (
    
    <input type='search'
    className='search'
    placeholder={placeholder}
    onChange={(e) => setSearchField(e.target.value)} 
    />
    );
}

export default Search;