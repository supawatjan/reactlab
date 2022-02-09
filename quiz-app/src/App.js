import './App.css';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Score from './Components/Score';
import {useState, createContext} from 'react';


function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value = {{appState, setAppState,score, setScore}}>
      <div className="App">
        <h1>QUIZ APPLICATION</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}

      </div>

    </DataContext.Provider>

    
  );
}

export default App;
export const DataContext = createContext()