import './App.css';
import Header from './component/header';
import ImageDisplay from './component/imageDisplay';
import DataProvider from './component/dataContext';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Header/>
        <main>
          <ImageDisplay/>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
