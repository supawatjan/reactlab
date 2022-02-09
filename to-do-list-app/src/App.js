import './App.css';
import Form from './components/form';
import AllList from './components/list';
import Alert from './components/alert';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, createContext } from 'react';


function App() {
  const [newList, setNewList] = useState("") //save new list
  const [savedLists, setSavedLists] = useState([]) //save all list
  const [alert, setAlert] = useState({isShow:false,msg:"",className:""})
  const [editListName, setEditListName] = useState("") //save list name editing
  const [listIdEditing, setlistIdEditing] = useState(null)

  return (
    <DataContext.Provider value={
      {newList,setNewList,savedLists, setSavedLists, alert, setAlert,editListName, setEditListName,
        listIdEditing, setlistIdEditing
      }
    }>
      <div className="app">
        <header>
          <h1>To Do List </h1>
          <div className='today'><FiChevronLeft/><h2> TODAY</h2> <FiChevronRight/></div>
        </header>
      

        <section>
          {alert.isShow&&<Alert/>}
          <Form/>
          <AllList/>

        </section>
      </div>
    </DataContext.Provider>
  );
}

export default App;
export const DataContext = createContext()