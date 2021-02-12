import React, { Fragment } from 'react'
import CountryList from '../country-List/CountryList'
import './countryCard.css'

function CountryCard({country , id}) {

const {name , population , region , capital, flag} = country

return(
            <Fragment>
                    <div className="country-card">
                    <img src={flag} alt="" />
                      <div className="description">
                          <div className="name">
                          <p >{name}</p>
                          </div>
                         
                          <p key="">Population :{population}</p>
                          <p>Capital:  {capital}</p>
                          <p>Region:    {region}</p>

                         </div>
                   
                  


                    </div>
                      
            </Fragment>
        
          
        
)
}
export default CountryCard