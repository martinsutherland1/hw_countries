import React, { useState, useEffect } from 'react';

import CountryDetail from "../components/CountryDetail";
import CountrySelect from "../components/CountrySelect";



const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

useEffect(() => {
  getCountries();
}, [])

const getCountries = function() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => setCountries(countries))
}

const populationTotal = countries.reduce((runningTotal, count) => {
    return runningTotal + count.population;
}, 0)




const onCountryClick = function(country){
    setSelectedCountry(country);
}

const [favourites, setFavourites] = useState(
    []
)



return (
    <div className="main-container">
    <p>Total population: {populationTotal}</p>
    <CountrySelect countries={countries} onCountryClick={onCountryClick} />
    {/* <FavouriteSelector countries={countries} onFavouriteClick={onFavouriteClick}/> */}
    {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
   {/* {selectedCountry ? <AddFaveCountry selectedCountry={selectedCountry} /> : null} */}
    
        

       
        
    
    </div>
)

}

export default CountryContainer;