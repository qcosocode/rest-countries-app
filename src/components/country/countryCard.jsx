import React from 'react';

function CountryCard ({ name, population, capital, region}) {

  return (
    <div>
      <div className="name">{name}</div>
      <div className="description">
        <ul>
          <li>
            <span>{population}</span>
          </li>
          <li>
            <span>{region}</span>
          </li>
          <li>
            <span>{capital}</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default CountryCard