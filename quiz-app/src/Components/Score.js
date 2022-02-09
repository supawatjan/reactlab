import "../App.css"
import QuestionsData from "../data/QuestionsData"
import {useContext} from "react"
import {DataContext} from "../App"

const Score = () => {
    const {setAppState,score,setScore} = useContext(DataContext)

    const resetQuiz = ()=>{
        setAppState("menu")
        setScore(0)
    }
    return(
        <div className="score">
            <h2>Your Score</h2>
            <h1>{score} / {QuestionsData.length}</h1>
            <button className="button" 
                onClick={()=>resetQuiz()}
            >Test Again?</button>
        </div>
    )
}

export default Score