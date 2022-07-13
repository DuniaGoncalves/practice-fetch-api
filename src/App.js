import React, { useEffect, useState } from "react";
import Drinks from "./Drinks";
import "./App.css";

const App = () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  const [margaritas, setMargaritas] = useState([]);

  // maybe creating a promise when we use fetch that way we can have a callback to do something if the fetch fails
  useEffect(() => {
    fetchMargaritas()
  }, [])

  
  const fetchMargaritas = async () => {
    const data = await fetch(url);
    const drinks = await data.json();
    console.log(drinks);
    setMargaritas(drinks.drinks);
  };

  return (
    <div className="App">
      <h1>Margaritas</h1>
      {/* map creates new array */}
      {margaritas.map(margarita => {
        return <Drinks key={margarita.idDrink} margarita={margarita} />;
      })}
    </div>
  );
};


export default App;