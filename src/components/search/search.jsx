import React from 'react'


function Search() {
    return (
        <div className="search-filter-container">
            <div className="search">
                 <input type="text" id ="texto" placeholder="Search for a country " />
             </div>
        <div className="filter"> 
            <select name="Continent">
                <option value="1">Africa</option> 
                <option value="2">América</option> 
                <option value="3">Europa</option>
                <option value="4">Asia</option> 
                <option value="5">Oceania</option> 
        
             </select>
        </div>
    </div>
    )
    
}

export default Search