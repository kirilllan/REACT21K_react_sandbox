import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userName, setUsername] = useState('')
  useEffect(() => {
    getNames()
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names')
    console.log('response: ', response)
    setUsername(response.username)
  }


  return (
    <div className="App">
      from App.js
    </div>
  );
}

export default App;
