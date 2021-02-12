import {React, Fragment} from 'react'
import CountryCard from '../country/CountryCard'
import './CountryList.css'


function CountryList({countries}) {

 
    
    
    return (
       <Fragment>

           <div className="Content">
           
                  {
                      countries.map(country => {
                          return (
                             // <li key={e.alpha2Code}>{e.name}--{e.population}--{e.region}--{e.capital}</li>
                              <CountryCard
                             key  = {country.alpha2Code}
                              country = {country}
                              
                              />
                          )
                      })
                  } 
            
           </div>
               

               
              

       </Fragment>
        
    


           

    )
}

export default CountryList