import './App.css';
import { DataProvider } from './Components/DataContext';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';





function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <span>Search Filter Workshop</span>
          
        </header>
        <section>
          <SearchBar/>
          <Content/>
        </section>
      </div>
    </DataProvider>
    
  
  );
}

export default App;
