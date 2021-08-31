import './App.css';
import NewNote from './containers/NewNote'
import Notes from './containers/Notes'
import { useEffect } from 'react';
import { initializeNotes } from './store/reducers/reducer'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])
  return (
    <div className="App">
      <NewNote />
      <Notes />
      <img className="side-img" src="notice_one_guy.jpeg" />
    </div>
  );
}

export default App;
