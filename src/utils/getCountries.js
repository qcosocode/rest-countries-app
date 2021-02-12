const getCountries = async (str) => {
  const URL = `https://restcountries.eu/rest/v2/name/${str}`;
  if (str.length > 1) {
    const response = await fetch(URL);
    const countries = await response.json();
    console.log("countries", countries);
    return countries;
  } else {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const all = await response.json();
    return all;
  }
};

export default getCountries;
