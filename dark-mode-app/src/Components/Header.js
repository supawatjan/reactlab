import {useContext } from 'react'
import Switch from 'react-switch'
import {themeModeContext} from '../App'

const Header = () => {
    const {themeMode,setThemeMode,theme,changeTheme} = useContext(themeModeContext)

    
    const toggleSwitch = (event) =>{ // the event send boolean(param) > it's pattern 
        setThemeMode(event)
        changeTheme()
    }
   
    return (
        <header className={theme}>
            <span>Dark Mode</span>
            <Switch 
                onChange = {toggleSwitch}  // catch switch status if changing
                checked = {themeMode} // we have to use it for switch toggle
                uncheckedIcon = {false}
                checkedIcon = {false}
                onColor = {'#FF9700'}
            />

        </header>
        
        
    )
}

export default Header