import React from "react";

function Search({ searchCountries }) {
  return (
    <div className="search-filter-container">
      <div className="search">
        <input
          type="text"
          autoComplete="off"
          id="texto"
          placeholder="Search for a country "
          onChange={(e) => searchCountries(e)}
        />
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
  );
}

export default Search;
