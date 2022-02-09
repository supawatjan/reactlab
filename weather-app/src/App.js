import './App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const apiKey = '62a97003e0ea22ce88a9e89c5418a880'
  const [name, setName] = useState('tokyo')
  const [city, setCity] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      setCity(data)
      setIsLoaded(true)
    })
  },[name])
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-conatiner'>
          <span className="logo">WEATHERIA</span>
        </div>
        <div className='city-btn'>
          <button className={name ===`tokyo`?`city-choice active`:`city-choice`} onClick={()=>setName('tokyo')}>Tokyo</button>
          <button className={name ===`new york`?`city-choice active`:`city-choice`} onClick={()=>setName('new york')}>New York</button>
          <button className={name ===`london`?`city-choice active`:`city-choice`} onClick={()=>setName('london')}>London</button>
          <button className={name ===`prague`?`city-choice active`:`city-choice`} onClick={()=>setName('prague')}>Prague</button>
          <button className={name ===`sydney`?`city-choice active`:`city-choice`} onClick={()=>setName('sydney')}>Sydney</button>
          <button className={name ===`chicago`?`city-choice active`:`city-choice`} onClick={()=>setName('chicago')}>Chicago</button>
          <button className={name ===`Rome`?`city-choice active`:`city-choice`} onClick={()=>setName('Rome')}>Rome</button>
        </div>

      </header>
      <main>

        {isLoaded && <div className="container">
          <span className="city">{city.name}</span>
          <span className="temp">{city.main.temp}&deg;C</span>
          <div className="min-max">
            <span>Min : 
              <span className="s-number"> {city.main.temp_min}&deg;C</span> 
            </span>
            <span>Max : 
              <span className="s-number"> {city.main.temp_max}&deg;C</span> 
            </span>
          </div>
          <div className="info">
            <div className="detail"> {city.weather[0].main}</div>
            <div className="humidity">Humidity :  
              <span className="s-number"> {city.main.humidity}%</span>
            </div>
            <div className="uv">Visibility : 
              <span className="s-number"> {city.visibility /1000} km</span>
            </div>
          </div>
          
        </div>}

      </main>
    </div>
  );
}

export default App;
