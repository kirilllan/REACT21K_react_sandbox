import React from 'react'
import Router from "./Router";
import UserContext from "./context/UserContext";

const  App = () => {
  return (
    <UserProvider>
     <Router />
    </UserProvider>
  )
}

export default App;

