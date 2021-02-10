import React from 'react';
import CountryCard from '../country/countryCard';

function CountryList ({ countries = [] }) {

  console.log('countries', countries)

  return(
    <div>
      {
        countries.map(country => {
          return(
            <div key={country.name}>
              <CountryCard
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryList