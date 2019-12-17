import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredient] = useState([]);
  const addIngredientHandler = ingredients => {
    setUserIngredient(prevIngredients => [...prevIngredients,
      {id:Math.random().toString(), ...ingredients}]);
  }

  const removeIngredientHandler=(id)=>{
    console.log(id); 
    setUserIngredient(prevIngredients=>{
      const ingredients=prevIngredients.filter(ingredient=>ingredient.id!==id);
      return ingredients;
    });
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler.bind(this)} />
      </section>
    </div>
  );
}

export default Ingredients;
