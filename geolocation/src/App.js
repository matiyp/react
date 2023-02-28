import './App.css';
import { useState, useEffect } from 'react';
import Weather from './Weather';

function App() {
  let [lat, setLat] = useState(0)
  let [lng, setLng] = useState(0)
  let [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      }, (error) =>{
        alert(error)
      })
    }
    else{
      alert("Your browser doesn't support geolocation!")
    }
  }, [])

  if(isLoading){
    return <p>Loading...</p>
  }
  
else {
  return (
  <div>
      <h2>Your position is</h2>
      <p>
        Position:&nbsp;
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
      <Weather lat={lat} lng={lng} />
  </div>
  );
}
}


export default App;
