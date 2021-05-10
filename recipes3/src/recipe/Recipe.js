import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";

export default function Recipe(props) {
  const [recipe, setRecipe] = useState(undefined);
  const user = useContext(UserContext);
  const history = useHistory();
  const deleteRecipe = async () => {
    await firestore.collection("users").doc(user.uid).collection("recipes").doc(props.match.params.id).delete();
    history.push('/');
  }
  useEffect(() => {
    const getRecipe = async () => {
      const recipeDoc = await firestore.collection("users").doc(user.uid).collection("recipes").doc(props.match.params.id).get();
      setRecipe(recipeDoc);
    };
    getRecipe();
  }, [user, props.match.params.id]);
  const renderIngredients = () => {
    const recipeData = recipe.data();
    return recipeData.ingredients.map((ingredient, idx) => {
      return ( <>
      <li key={i}>{ingredient}</li>
      <p>{recipeData.description}</p>
      </> )
    })
  }
  const renderRecipe = () => {
    const recipeData = recipe.data();
      return ( <>
      <h2>{recipeData.name}</h2>
      <ul>
        {renderIngredients}
      </ul>
    </> )
  };
  return (
    <div classNAme="recipe">
      <h1>Recipes:</h1>
      {recipe && renderRecipe()}
    <button onClick={deleteRecipe}>Delete</button>
    <button onClick={() => history.push(`&edit/${props.match.params.id}`)}>Edit</button>
    </div>
  )
}



