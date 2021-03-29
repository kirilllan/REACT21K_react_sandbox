import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<Footer />, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'));

