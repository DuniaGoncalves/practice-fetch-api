import React, { useEffect, useState } from "react";
import Drinks from "./Drinks";
import "./App.css";

const App = () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  const [margaritas, setMargaritas] = useState([]);

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
      <h1>Drinks</h1>
      {margaritas.map(margarita => {
        return <Drinks key={margarita.idDrink} margarita={margarita} />;
      })}
    </div>
  );
};


export default App;