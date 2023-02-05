import { useEffect, useState } from 'react';
import './App.css';


function App() {
  let [time, setTime] = useState (new Date())

 /*  function updateTime(){
    setTime (new Date())
  } */

  useEffect(() => {
    //let id = setInterval(updateTime,1000)
    let id = setInterval(()=>{
      setTime(new Date())
    })
    return()=>{
      clearInterval(id)
    }
  },[])

  return (
    <>
    <form>
      <div style={{margin: "30px"}}>
        <p>Kello on: {time.toLocaleTimeString()}</p>
      </div>
    </form>
    </>
  );
}

export default App;
