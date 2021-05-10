import React from 'react'
import Router from "./Router";
import { UserProvider } from "./context/UserContext";
import "./recipe/style.css";

const  App = () => {
  return (
    <div className="container">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  )
}

export default App;