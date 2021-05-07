import React from "react";

const RecipeCard = ({ name, desc }) => {
  return (
    <div>
      {name} = {desc}
    </div>
  )
}

export default RecipeCard;