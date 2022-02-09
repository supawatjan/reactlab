import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import { createContext, useState } from 'react';

export const themeModeContext = createContext()


function App() {
  const [themeMode,setThemeMode] = useState(false)
  const [theme,setTheme] = useState("light")
  
  const changeTheme = () => {
    
    if (themeMode === true){
      setTheme("light")
    }else{
      setTheme('dark')
    }

  }

  return (
    <themeModeContext.Provider value={{themeMode,setThemeMode,theme,setTheme,changeTheme}}>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </themeModeContext.Provider>
    
  );
}

export default App;
