import light from '../image/light.svg'
import dark from '../image/dark.svg'
import {useContext } from 'react'
import {themeModeContext} from '../App'

const Content = () => {
    const {theme} = useContext(themeModeContext)

    return (
        <main className={theme}>
            <div className="content">
                <h1>Name Company</h1>
                <p>Company's concept</p>
            </div>
            <img src={theme === 'dark'? dark : light} alt="bg"/>
        </main>
        
        
    )
}

export default Content