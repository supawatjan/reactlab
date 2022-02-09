import './sidebar.css'
import { useContext } from "react"
import { DataContext } from "./DataContext"
const Sidebar = () =>{
    const {foodCategory} = useContext(DataContext)
    return(
        <div className="sidebar-container">
            <ul className='info-box'>
                <li><a href="#" className='info'>Reserve</a></li>
                <li><a href="#" className='info'>About Us</a></li>
                <li><a href="#" className='info'>Facebook Fanpage</a></li>
                <li><a href="#" className='info'>Direction</a></li>
                <li><a href="#" className='info'>Contact us</a></li>  
            </ul>
           
        </div>
    )
}
export default Sidebar