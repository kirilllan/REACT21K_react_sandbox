import React, { useState, useEffect, useContext } from 'react';
import { firestore } from "../firebase";
import UserContext from "../context/UserContext";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const user = useContext(UserContext)
  useEffect(() => {
    const getRecipes = async () => {
      const recipeCol = await firestore.collection("users")
    }
    getRecipes();
  }, [])
  return <div className="recipe-list"></div>
}

export default RecipeList


