import { useState, React, useEffect, Fragment } from "react";
import NavBar from "../../components/nav/NavBar";
import Search from "../../components/search/Search";
import CountryList from "../../components/country-list/CountryList";
import getAllCountries from "../../utils/getAllCountries";

function Home() {
  const [allCountries, setAllCountries] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  async function updateState() {
    console.log("haciendo el fetch");
    const response = await getAllCountries();
    console.log(response[1]);

    setAllCountries(response);
    setCountriesList(response);
    return response;
  }

  function searchCountries(e) {
    const input = e.target.value;
    if (input.length > 1) {
      console.log("Estoy buscando este pais");
      const countrySearched = countriesList.find(
        (countries) => countries.name === input
      );
      countrySearched === undefined
        ? setCountriesList(allCountries)
        : setCountriesList([countrySearched]);
    } else {
      setCountriesList(allCountries);
    }
  }

  useEffect(() => {
    updateState();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Search searchCountries={searchCountries} countriesList={countriesList} />

      <CountryList countries={countriesList} />
    </Fragment>
  );
}
export default Home;
