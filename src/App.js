
import './App.css';
import NavBar from './components/nav/navBar'
import Search from './components/search/search'
import CountryList from './components/country-list/countryList'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <CountryList />
    </div>
  );
}

export default App;
