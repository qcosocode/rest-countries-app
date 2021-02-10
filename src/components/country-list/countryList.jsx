import React from 'react';
import CountryCard from '../country/countryCard';

function CountryList () {
  const countries = [{
    name: "Germany",
    data: {
      population: 81232314123,
      region: "Europe",
      capital: "Berlin"
    }
  },
  {
    name: "Spain",
    data: {
      population: 81232314123,
      region: "Europe",
      capital: "Berlin"
    }
  },
  {
    name: "Metallica",
    data: {
      population: 81232314123,
      region: "Europe",
      capital: "Berlin"
    }
  }
]
console.log('test')
  return(
    <div>
      {
        countries.map(country => {
          return(
            <div key={country.name}>
              <CountryCard
                name={country.name}
                population={country.data.population}
                region={country.data.region}
                capital={country.data.capital}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryList