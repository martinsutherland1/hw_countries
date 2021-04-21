import React from "react";

const CountrySelector = ({countries, onCountryClick}) => {

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountryClick(chosenCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })

   

    return (
        <>
        <div id="dropdown">
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
        </select>

        </div>
       
        
       
        
        
        </>
       
    )


    
}

export default CountrySelector;