import './App.css';
import money from './img/money.png'
import Currency from './Components/Currency'
import {CgArrowsExchangeV} from 'react-icons/cg'; 
import { useEffect, useState } from 'react';
function App() {
 
  const [currencyName,setCurrencyName]= useState([])
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('THB')
  const [exchangeRate, setExchangeRate] = useState(0)
  const [amount, setAmount] = useState(1) //recieve input
  const [isFromCurrency, setIsFromCurrency] = useState(true)

  let fromAmount,toAmount = 0 // the key of this app

  
  if(isFromCurrency){
    fromAmount = amount
    toAmount = (fromAmount * exchangeRate).toFixed(2)
    
  }else{
    toAmount = amount
    fromAmount = (toAmount / exchangeRate).toFixed(2)
    
  }        
  
 
  const amountFromCurrency = (event) =>{
    setIsFromCurrency(true)
    setAmount(event.target.value) 
    // fromAmount = amount
    // toAmount = (fromAmount * exchangeRate).toFixed(2)
    
  }
  const amountToCurrency = (event) =>{
    setIsFromCurrency(false)
    setAmount(event.target.value)
    // toAmount = amount
    
    // fromAmount = (toAmount / exchangeRate).toFixed(2)
    
  
  }
  
  useEffect(()=>{
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCurrencyName([...Object.keys(data.rates)])
      setExchangeRate(data.rates[toCurrency])
      
    })
  },[fromCurrency, toCurrency])

  
  

  return (
    <div className="App">
      <header>
        <img src={money} alt="logo"/>
        <h1>Currency Converter</h1>
      </header>
      <section>
        <div className ="container">
          <div className="from-currency">
            <Currency 
              currencyName={currencyName} 
              selectedCurrency = {fromCurrency}
              changeCurrency = {(event)=>setFromCurrency(event.target.value)}
              changAmount = {amountFromCurrency}
              amount = {fromAmount}
            />
          </div>
          <div className='symbol'>
            <CgArrowsExchangeV/>
          </div>
          <div className="to-currency">
            <Currency 
              currencyName={currencyName} 
              selectedCurrency = {toCurrency}
              changeCurrency = {(event)=>setToCurrency(event.target.value)}
              changAmount = {amountToCurrency}
              amount = {toAmount}

            />
          </div>
        </div>
      </section>
      
      
      
      
    </div>
  );
}

export default App;
