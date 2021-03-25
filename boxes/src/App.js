import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <h2>Title: {props.title}</h2>
    </div>
  )
}

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
    <Box/>
    </main>
    < Footer />
    </div>
  );
}

export default App;
