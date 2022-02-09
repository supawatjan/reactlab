import '../App.css';
import { useContext } from 'react';
import { DataContext } from './DataContext';


const SearchBar = () =>{
    const {searchWord, setSearchWord} = useContext(DataContext)
    return(
        <div className='search-bar-container'>
            <label htmlFor="search-for"></label>
            <input 
                type="text" className="search-input" 
                placeholder="what country u looking for?" 
                autoFocus
                value={searchWord}
                onChange={(e)=>setSearchWord(e.target.value)}
            />
           
        </div>
    )
}

export default SearchBar