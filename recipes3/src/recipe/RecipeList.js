import React, { useState, useEffect, useContext } from 'react';
import { firestore } from "../firebase";
import UserContext from "../context/UserContext";
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const user = useContext(UserContext)
  useEffect(() => {
    const getRecipes = async () => {
      const recipeCol = await firestore.collection("users").doc(user.uid)
      .collection("recipes").get();
      setRecipes(recipeCol.docs);
    }
    getRecipes();
  }, [user]);
  const renderRecipes = () => {
    return recipes.map((recipe, idx) => {
      const recipeData = recipe.data();
      return (
        <li key={idx}>
          <Link to={`/recipe/${recipe.id}`}>{recipeData.name}</Link>
        </li>
      );
    })
  }

  return <div className="recipe-list">{renderRecipes()}</div>
}

export default RecipeList


