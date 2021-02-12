import { React, Fragment } from "react";
import CountryCard from "../country/CountryCard";
import "./countryList.css";

function CountryList({ countries }) {
  return (
    <Fragment>
      <div className="Content">
        {countries.map((country) => {
          return (
            <CountryCard key={country.alpha2Code} country={country} />
          );
        })}
      </div>
    </Fragment>
  );
}

export default CountryList;
