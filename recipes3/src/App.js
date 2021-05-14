import React from 'react'
import Router from "./Router";
import { UserProvider } from "./context/UserContext";
import 'antd/dist/antd.css';
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