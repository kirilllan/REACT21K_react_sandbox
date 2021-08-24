import './App.css';
import NewNote from './containers/NewNote'
import Notes from './containers/Notes'

function App() {
  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
