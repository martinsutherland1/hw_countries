import React from "react";

const AddFaveCountry = ({selectedCountry}) => {
    return (
        <>
          <div>
              <h2>Favourites:</h2>
            <h3>Name: {selectedCountry.name}</h3>
            
        </div>
       
        </>
      
    )
}


// const CountrySelector = ({countries, onCountryClick}) => {

//     const handleChange = function(event){
//         const chosenCountry = countries[event.target.value];
//         onCountryClick(chosenCountry);
//     }


//     const[items, setItems] = useState([])

//    const addItems = () => {
//        setItems([ ...items, {
//             id: items.length,
//             value: selectedCountry
//        }])
//    }

//    return (
//        <div>
//            <button onClick={addItems}>Add favourite</button>
//            <ul>
//                {items.map(item => (
//                    <li key={item.id}>{item.value}</li>
//                )
                
//                 )}
//            </ul>
//        </div>
//    )
    
// }

export default AddFaveCountry;
  




   
      

        

    


    
      



