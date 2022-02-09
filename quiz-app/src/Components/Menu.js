import "../App.css"
import {useContext} from "react"
import {DataContext} from "../App"

const Menu = () => {
    const {setAppState} = useContext(DataContext)

    return(
        <div className="menu">
            <h2>Quiz</h2>
            <button className="button" onClick={()=>setAppState("quiz")}>Start</button>

        </div>
    )
}

export default Menu
