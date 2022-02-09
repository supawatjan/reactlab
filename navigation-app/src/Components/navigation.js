import '../App.css';
import './navigation.css';
import MenuData from '../data/menuData';
import { Link } from "react-router-dom"
import { HiMenu,HiHome,HiShoppingCart,HiUser,HiX } from "react-icons/hi";
import { useState } from 'react';
const Navigation = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    let navMenuClass = (showMenu? 'nav-menu active' : 'nav-menu')
    const onNavMenu = () => setShowMenu(!showMenu)

     
    return(
        <aside>
            <nav className='nav-main'>

                <div className="nav-header">
                    <div className="navbar-toggle" onClick={onNavMenu}>
                        <Link to="#">
                            <HiMenu /> <span>Menu</span>
                        </Link>
                    </div>
                </div>

                <div className = {navMenuClass}>
                    
                    <ul>

                        <li className="navbar-toggle" onClick={onNavMenu}>
                            <Link to="#">
                                <HiX/> <span>Close</span>
                            </Link>
                        </li>
                        {MenuData.map((menu,key)=>{
                            return(
                            <li className='menu-item' key={key} onClick={onNavMenu}>
                                <Link to={menu.path}> 
                                    <span className='menu-icon'>{menu.icon}</span>
                                    <span className='menu-name'>{menu.name}</span>
                                </Link>
                            </li>
                            )
                        })}
                        {/* <li className='menu-item'>
                            <Link to="#"><HiHome className='menu-icon'/>
                            <span className='menu-name'>Home</span></Link>
                            
                        </li>
                        <li className='menu-item'>
                            <Link to="#">
                                <HiUser className='menu-icon'/>
                                <span className='menu-name'>Profile</span>
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="#">
                                <HiShoppingCart className='menu-icon'/>
                                <span className='menu-name'>Shopping</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Navigation