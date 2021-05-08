import React, {useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthHome from "./auth/AuthHome";
import NewRecipe from "./recipe/NewRecipe";
import UserContext from "./context/UserContext";
import RecipeList from "./recipe/RecipeList";
import Recipe from "./recipe/RecipeList";

const Router = () => {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        {user ? (
        <>
          <Route exact path="/">
            <RecipeList />
          </Route>
          <Route path="/new">
            <NewRecipe />
          </Route>
          <Route path="/recipe/:id" component={Recipe} />
        </>
        ) : (
        <>
          <Route exact path="/">
            <AuthHome />
          </Route>
        </>
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
