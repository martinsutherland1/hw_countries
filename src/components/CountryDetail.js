import React from "react";


const CountryDetail = ({selectedCountry}) => {

   


    
    return (
        <>
          <div>
            <h3>Name: {selectedCountry.name}</h3>
            <img src={selectedCountry.flag}/>
        </div>
       

       
        </>
      
    )
}

export default CountryDetail;
