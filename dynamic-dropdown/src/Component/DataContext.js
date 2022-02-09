import { createContext, useEffect, useState } from "react"
import MenuData from "../data/MenuData"

export const DataContext = createContext() //context name

const DataProvider = ({children}) =>{ //component name
    const [allMenu, setAllMenu] = useState([])
    const [categorySelected, setCategorySelected] = useState(MenuData)
    

    useEffect(()=>{
        const sortMenu = MenuData.sort((a,b)=>{
            return (a.foodName).localeCompare(b.foodName)
        })
        setAllMenu(sortMenu)
        
    },[])

    const showMenuFollowCategory = (event) =>{
        const category = event.target.value
        setCategorySelected(allMenu.filter((element)=>{
            if (category === 'เมนูทั้งหมด'){
                return allMenu
            }
            return element.category === category  // arr.map can't run this line
            
        }))
        

    }

    
    

    return(
        <DataContext.Provider value={{allMenu, showMenuFollowCategory,categorySelected}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider