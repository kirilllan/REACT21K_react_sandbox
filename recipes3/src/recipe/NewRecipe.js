import React, { useState, useContext } from 'react';
import UserContext from "../context/UserContext";
import {firestore} from "../firebase";

export default function NewRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const user = useContext(UserContext);
  const saveRecipe = async (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',');
    await firestore.collection("users").doc(user.uid).collection("recipes").add({name,
        ingredients: ingredientsArray,
        description});
    setName("");
    setIngredients("");
    setDescription("");
  }
  return (
    <div className="new-recipe">
      <h1>New recipe</h1>
      <form>
      <input type="text" placeholder="recipe name" value={name} onChange={(e) => 
        setName(e.target.value)
      } /> {" "}
      <input type="text" placeholder="ingredients separated by comma" value={ingredients} onChange={(e) => 
        setIngredients(e.target.value)
      } />
      <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={saveRecipe}>Save recipe</button>
      </form>
    </div>
  )
}
