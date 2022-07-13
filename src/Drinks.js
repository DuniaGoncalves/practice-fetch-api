// A component that returns a Drinks
import React from "react";

const Drinks = ({margarita}) => {
  return (
    <div>
      <h5>{margarita.strDrink}</h5>
      <img src={margarita.strDrinkThumb} alt={`image of ${margarita.strDrink}`} />
    </div>
  );
};

//create a card that displays all info

export default Drinks;