import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";
import Main from "./Main";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
