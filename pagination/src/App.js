import './App.css';
import MenuData from './data/MenuData';
import { FoodComponent } from './components/foodComponent';
import React, { useEffect, useState } from 'react';


function App() {
  const [menu, setMenu] = useState(MenuData)
  const [menuPage, setMenuPage] = useState([])
  const [page, setPage] = useState(0)

  const pagination = ()=>{
    const itemsPerPage = 3
    const allPage = Math.ceil(MenuData.length / itemsPerPage )
    //console.log('allPage:', allPage);

    const slicedMenu = Array.from({length:allPage},(elem,index)=>{
      const start = index * itemsPerPage
      //console.log('start',start,'round',index+1);
      return MenuData.slice(start, start + itemsPerPage)
    })
    //console.log('slicedMenu',slicedMenu);
    return slicedMenu
  }

  const handlePage = page =>{
    setPage(page)
  }

  useEffect(()=>{
    const paginate = pagination()
    setMenuPage (paginate)
    setMenu(paginate[page])
    console.log(paginate[page]);
  },[page])

  return (
    <div className="App">
      <header className="App-header">
        <span className="logo">PAGINATION | FOOD CARDS</span>
      </header>

      <main>
        {/* Menu image */}
        {menu.map((elem,index)=>{
          return <FoodComponent {...elem}  key={index}/>
        })}

        {/*Paginate menu  */}
      <div className='pagination-container'>
          {menuPage.map((elem,index)=>{
            return <button 
              className={`page-number ${index === page ? 'active' : 'inactive'}`}
              key={index}
              onClick={()=>handlePage(index)}
            >{index + 1}</button>
          })}
        </div>
      </main>
      
    </div>
  );
}

export default App;
