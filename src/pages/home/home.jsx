
import {useState,React, useEffect, Fragment}  from 'react'
import NavBar from '../../components/nav/navBar'
import Search from '../../components/search/search'
import CountryList from '../../components/country-List/CountryList'
import getAllCountries from '../../utils/getAllCountries'

 function Home() {
const  [allCountries , setAllCountries] = useState([])
  
      async function updateState() {
      console.log("haciendo el fetch");
      const  response = await getAllCountries();
      console.log(response[1]);
       
        setAllCountries(response)
        return response
      } 
 
  useEffect( () => {
   updateState()
   
  }, []);

  return(
           <Fragment>
                    <NavBar/>
                     <Search
                     allCountries = {allCountries}
                     />
                    CountryList
                    
           </Fragment>
            
        

  )

}
export default Home ;