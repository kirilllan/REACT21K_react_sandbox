import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";
//import Main from "./Main";
import Main_router from "./Main_router";
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
        <Main_router />
        <Footer />
    </Router>
  /*   <Router>
    <header>
      <Header />
      <h1>Logo</h1>
    </header>
    <main>
      <Box name="meme"/>
      <  Box   name="abc
      cba" age="3" title="a"/>
      <Box name="box from component"/>
      <Main />
      < Main name ="das" />
      </main>
      < Footer />
      </Router> */
  );
}

export default App;
