import React, {useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthHome from "./auth/AuthHome";
import NewRecipe from "./recipe/NewRecipe";
import UserContext from "./context/UserContext";

const Router = () => {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        {user ? (
        <>
          <Route path="/new">
            <NewRecipe />
          </Route>
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
