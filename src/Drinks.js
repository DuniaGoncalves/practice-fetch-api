import React, { useState } from "react";


const Drinks = ({margarita}) => {
  // I thought I would be able to toggle just using bootstrap but I was wrong. Not sure if it's 100% correct but it works but I wanted to add show to class when button clicked and remove it when clicked again
  const [open, setOpen] = useState();
  const show = open ? "show" : "" ;
  
  return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src={margarita.strDrinkThumb} alt={`image of ${margarita.strDrink}`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{margarita.strDrink}</h5>
              <p className="card-text">{`This type of margarita can be served in ${margarita.strGlass} and is typically ${margarita.strAlcoholic}`} </p>
              <p>
                <button onClick={() => setOpen(!open)} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#showRecipe" aria-expanded={open} aria-controls="showRecipe">
                  Recipe
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"collapse" + '' + show} id="showRecipe">
        <div className="card text-bg-info">
          <h5 className="card-header">{margarita.strDrink}</h5>
          <ul className="list-group list-group-flush">
            {/* Something I would have to think about here since some recipes have more ingredients map would be useful and possibly fetching api again by id to get all ingredients */}
            <li className="list-group-item">{margarita.strMeasure1 +' '+ margarita.strIngredient1}</li>
            <li className="list-group-item">{margarita.strMeasure2 +' '+ margarita.strIngredient2}</li>
            <li className="list-group-item">{margarita.strMeasure3 +' '+ margarita.strIngredient3}</li>
          </ul>
          <p>{margarita.strInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default Drinks;