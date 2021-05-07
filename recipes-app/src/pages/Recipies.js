import axios from "axios";
import SearchBox from "../components/SearchBox";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipies")
      .then((res) => setRecipies(res.data));
  }, []);

  const searchValueHandler = e => {
    setSearchInput(e.target.value);
  };

  const recipeFilter = recipies.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <SearchBox search={searchValueHandler} />
      <RecipiesList recipies={recipeFilter} />
      <RecipeForm />
    </>
  )

}

export default Recipies;