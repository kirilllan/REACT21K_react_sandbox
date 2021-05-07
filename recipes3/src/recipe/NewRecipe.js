import React from 'react'

export default function NewRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="new-recipe">
      <h1>New recipe</h1>
      <input type="text" placeholder="recipe name" value={name} onChange={(e) => 
        setName(e.target.value)
      } /> {" "}
      <input type="text" placeholder="ingredients separated by comma" value={ingredients} onChange={(e) => 
        setIngredients(e.target.value)
      } />
      <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button>Save recipe</button>
    </div>
  )
}
