import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthHome from "./auth/AuthHome";

export const Router = () => {
  const user = useContext(-userContext);
  return (
    <BrowserRouter>
      <Switch>
        {user ? (
        <></>
        ) : 
        <>
          <Route exact path="/">
            <AuthHome />
          </Route>
        </>}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
