import './Calculator.css'
import { FaBackspace,FaPlus, FaMinus, FaTimes, FaDivide,FaEquals } from "react-icons/fa";
import { useEffect, useState } from 'react';


const Calculator = () =>{
    const [inputValue, setInputValue] = useState('0')
    
    
    const display = value =>{
        
        if (inputValue[0] === '0'){
            setInputValue(value)
        }else{
            setInputValue(inputValue+value)
        }
    }
        
        
        
    

    const clearDisplay = () =>{
        setInputValue("0")
    }
    const deleteValue = () =>{
        const remainValue = inputValue.slice(0,-1)
        setInputValue(remainValue);
        if (inputValue.length < 1) setInputValue("0")
    }

        

    const calculate = ()=>{
        let result = eval(inputValue)
        setInputValue(result)
    }

    

    return(
        <div className="container">
            <div className='display'>
                <span>{inputValue}</span>
            </div>
            <div className='btn-container'>
                <button className='delete operator btn' onClick={()=>deleteValue()}><FaBackspace/></button>
                <button className='clear operator btn' onClick={()=>clearDisplay()}>C</button>
                <button className='operator btn' onClick={()=>display("/")}><FaDivide/></button>
                <button className='operator btn' onClick={()=>display("*")}><FaTimes/></button>
                <button className='number btn' onClick={()=>display("7")}>7</button>
                <button className='number btn' onClick={()=>display("8")}>8</button>
                <button className='number btn'onClick={()=>display("9")}>9</button>
                <button className='operator btn' onClick={()=>display("-")}><FaMinus/></button>
                <button className='number btn' onClick={()=>display("4")}>4</button>
                <button className='number btn' onClick={()=>display("5")}>5</button>
                <button className='number btn' onClick={()=>display("6")}>6</button>
                <button className='operator btn' onClick={()=>display("+")}><FaPlus/></button>
                <button className='number btn' onClick={()=>display("1")}>1</button>
                <button className='number btn' onClick={()=>display("2")}>2</button>
                <button className='number btn' onClick={()=>display("3")}>3</button>
                <button className='equal operator btn' onClick={calculate}><FaEquals/></button>
                <button className='number zero btn'onClick={()=>display("0")}>0</button>
                <button className='point btn' onClick={()=>{
                    display(".") 
                    
                }}>.</button>
            </div>
        </div>

    )

}

export default Calculator