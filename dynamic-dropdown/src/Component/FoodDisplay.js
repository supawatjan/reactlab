import './food-display.css'
import { useContext } from "react"
import { DataContext } from "./DataContext"
const FoodDisplay = ()=>{
    const {categorySelected} = useContext(DataContext)
    
    return(
        <div className="food-display-container">
            <ul className='food-item-container  grid' >
                {/* {allMenu.map((element,index)=>{
                    return (
                        <li className='food-item' key={index}>
                            <img src={element.image_url} alt={element.foodName}/>
                            <p className='food-name'>{element.foodName}</p>
                        </li>
                    
                    )
                })} */}
                <div className='grid-item-1'>
                    {categorySelected.map((element,index)=>{
                                if(index %3 === 0){
                                    return (
                                        <li className='food-item' key={index}>
                                            <img src={element.image_url} alt={element.foodName}/>
                                            <p className='food-name'>{element.foodName}</p>
                                        </li>
                                    
                                    )
                                } 
                                return null
                        })}
                </div>
                <div className='grid-item-2'>
                    {categorySelected.map((element,index)=>{
                            if (index %3 === 1){  
                                return(  
                                <li className='food-item' key={index}>
                                    <img src={element.image_url} alt={element.foodName}/>
                                    <p className='food-name'>{element.foodName}</p>
                                </li>
                            )
                            }
                            return null
                    })}
                    
                    
                </div>
                <div className='grid-item-3'>
                {categorySelected.map((element,index)=>{
                    if(index %3 === 2){
                        return (
                            <li className='food-item' key={index}>
                                <img src={element.image_url} alt={element.foodName}/>
                                <p className='food-name'>{element.foodName}</p>
                            </li>
                        )
                    }
                    return null
                    
                })}
                </div>
            </ul>

                
            
                
            

            
        </div>
    )

}

export default FoodDisplay