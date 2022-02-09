import './dropdown.css'
import { useContext } from "react"
import { DataContext } from "./DataContext"


const Dropdown = () =>{
    const {allMenu,showMenuFollowCategory} = useContext(DataContext)
    
    let foodCategory = []
    
    allMenu.map((element)=>{
        if (!foodCategory.includes(element.category)){
            return foodCategory.push(element.category)
        }else{
                return []
        }
    })
    foodCategory.sort((a,b)=>{
        return a.localeCompare(b)
    })

   

    return(
        <div className="ddown-container">
            
            <select className="dropdown" onChange={showMenuFollowCategory}>
                <option value='เมนูทั้งหมด'>เมนูทั้งหมด</option>
                {foodCategory.map((element,index)=>{
                    return <option value={element} key={index}>{element}</option>
                })}
                
               
            </select>
        </div>
    )
}
export default Dropdown