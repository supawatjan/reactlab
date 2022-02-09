import './App.css';
import DataProvider from './Component/DataContext';
import Dropdown from './Component/Dropdown';
import FoodDisplay from './Component/FoodDisplay';
import Sidebar from './Component/SideBar';

function App() {

  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <span>Dropdown Dynamic Workshop</span>
          <nav>
            <Dropdown/>
          </nav>
        </header>
        <section>
          <aside>
            <Sidebar/>
          </aside>
          <main>
            <FoodDisplay/>
          </main>
        </section>
       
      </div>
    </DataProvider>
  );
}

export default App;
