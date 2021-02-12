import {useState,React, useEffect}  from 'react'
import CountryList from '../country-List/CountryList'
import getAllCountries from '../../utils/getAllCountries'
import CountryCard from '../country/CountryCard'



function Search({allCountries}) {
   
      
    const [countriesList,  setCountriesList] = useState([])
    const [paisBuscado ,  setPaisBuscado]    = useState([{name: 'Argentina' , population:300 , region:'America'}])


      // useEffect (()=> setCountriesList(allCountries))
   
    
    function SearchCountries(e) {
    const input = e.target.value
    
    
    if (input.length > 1) {
       
        console.log('Estoy buscando este pais');
      const   countrySearched=  countriesList.find( countries => countries.name === input)
      console.log(countrySearched)
     // countrySearched === undefined ? setPaisBuscado([]) : setPaisBuscado([countrySearched])
      countrySearched === undefined ? setCountriesList(allCountries) : setCountriesList([countrySearched])
      
       
    }

    else {
        setCountriesList(allCountries)
    }
    
  
    
   
       
    }
    return (
        <div className="search-filter-container">
            <div className="search">
                 <input type="text" autoComplete="off" id ="texto" placeholder="Search for a country " onChange={(e ) => SearchCountries(e)} />
                 
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
       countries = {countriesList}
        
           />
           
          
    </div>
    )
    
}

export default Search