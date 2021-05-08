import React from 'react'
import Router from "./Router";
import { UserProvider } from "./context/UserContext";

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