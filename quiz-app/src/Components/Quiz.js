import "../App.css"
import QuestionsData from "../data/QuestionsData"
import {useContext, useEffect, useState} from "react"
import {DataContext} from "../App"

const Quiz = () => {
    const {setAppState,score,setScore} = useContext(DataContext)
    
    const [currentQuiz, setCurrentQuiz ] = useState(0)
    const [selectedChoice, setSelectedChoice] = useState("")
 
    useEffect(() =>{
        checkAnswer() // eslint-disable-next-line
    },[selectedChoice])

    const checkAnswer = () =>{
        if (selectedChoice !== ""){
            if (selectedChoice === QuestionsData[currentQuiz].answer){
                setScore(score+1)
                nextQuiz()
            }else{
                nextQuiz()
            }
        }
    }
    const nextQuiz = () => {
        setSelectedChoice("")
        
        if (currentQuiz === QuestionsData.length - 1) {
            setAppState("score")
        }else{
            setCurrentQuiz(currentQuiz + 1)
        }
    }

    return(
        <div className="quiz">
            <h2>{QuestionsData[currentQuiz].question}</h2>
            <div className="choices">
                <button className="button" onClick={()=>setSelectedChoice("A")}>{QuestionsData[currentQuiz].A}</button>
                <button className="button" onClick={()=>setSelectedChoice("B")}>{QuestionsData[currentQuiz].B}</button>
                <button className="button" onClick={()=>setSelectedChoice("C")}>{QuestionsData[currentQuiz].C}</button>
                <button className="button" onClick={()=>setSelectedChoice("D")}>{QuestionsData[currentQuiz].D}</button>
            </div>
            <div className="current-quiz">
                <h3>Question {currentQuiz+1} / {QuestionsData.length}</h3>
            </div>
        </div>
    )
}

export default Quiz
