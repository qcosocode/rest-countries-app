import React, { useState } from 'react'
import CountryList from '../country-list/countryList'
import getCountries from '../../utils/getCountries'

function Search() {
    const [countries, setCountries] = useState([])
    const onInputChange = async str => {  
        const countries = await getCountries(str)
        setCountries(countries)
    }
    return (
        <div className="search-filter-container">
            <div className="search">
                 <input type="text" id ="texto" placeholder="Search for a country" onChange={e => onInputChange(e.target.value)} />
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
        <CountryList 
            countries={countries}
        />
    </div>
    )
    
}

export default Search