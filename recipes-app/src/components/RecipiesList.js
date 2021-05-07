import React from "react";
import RecipeCard from "./RecipeCard";

const RecipiesList = ({ recipies }) => {
  return (
    <div className="posts">
      <h2>Our recipes:</h2>
      {recipies.map(recipe => {
        <RecipeCard 
          key={recipe.id} 
          name={recipe.name} 
          img={recipe.img} 
          desc={recipe.desc} 
          link={recipe.id} 
        />
      })}
    </div>
  )
}

export default RecipiesList;