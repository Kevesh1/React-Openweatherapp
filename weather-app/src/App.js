import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather'



function App() {

  const [data, setData] = useState([]);
  const apiKey = '59431bbb21bdc7b0684e492168580b91';
  const [input, setInput] = useState("");

  

    const fetchData = async (location) => {
      try{
      await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`)
        .then((res) => res.json())
        .then(result=>{
          const lat = result[0].lat;
          const long = result[0].lon;
          console.log(result)

          fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
            
          })
          .catch(error => {
            console.log('Error', error)
          });
        
        })
      } catch(error){
        console.log('Error' , error)
      }
        
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
    setInput("")
  }


  return (
    <div className="App">
       <form className="form" onSubmit={handleSubmit}>
            <input
            className='input'
            type="text"
            placeholder="Input a city"
            onChange={(e) => setInput(e.target.value)}
            value={input}/>
            <button type="submit">search</button>
        </form>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </div>
  );
}

export default App;
