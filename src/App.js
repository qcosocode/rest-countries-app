import {useState,React, useEffect}  from 'react'
import './App.css';
import NavBar from './components/nav/navBar'
import Search from './components/search/search'
import CountryList from './components/country-List/CountryList'
import getAllCountries from './utils/getAllCountries'
import Home from './pages/home/home'




function App() {

    
   
    
  
  //updateState() ;
 
 
  return (
    <div className="App">
    
      
      <Home/>
      
       
    </div>
  );
}

export default App;
