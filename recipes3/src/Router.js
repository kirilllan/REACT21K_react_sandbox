import React, {useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthHome from "./auth/AuthHome";
import NewRecipe from "./recipe/NewRecipe";
import UserContext from "./context/UserContext";
import RecipeList from "./recipe/RecipeList";
import Recipe from "./recipe/Recipe";
import RecipeNavbar from "./recipe/RecipeNavbar";
import EditRecipe from "./recipe/EditRecipe";

const Router = () => {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        {user ? (
        <>
        <RecipeNavbar />
          <Route exact path="/">
            <RecipeList />
          </Route>
          <Route path="/new">
            <NewRecipe />
          </Route>
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/edit/:id" component={EditRecipe} />
        </>
        ) : (
        <>
          <AuthHome />   
        </>
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
