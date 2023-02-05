import './App.css';
import { useState } from 'react';
 

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [inBlood, setInBlood] = useState(0)


  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let remaning = grams - (burning * time)

  function handleSubmit(e){
    e.preventDefault();
    let result = 0
    if (gender === "male"){
      result = remaning / (weight * 0.7)
    }else if(gender === "female"){
      result = (remaning /(weight * 0.6))
    }
    
    if(result >= 0){
    setInBlood(result)
    }else{
      setInBlood(0)
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
        <label>Time</label>
        <input name="time" type="number" value={time} onChange={e => setTime(e.target.value)}/>
      </div>
      <div>
        <label>Gender</label>
        <input name='gender' type="radio" value="male"  onChange={e => setGender(e.target.value)}/>Male
        <input name='gender' type="radio" value="female" onChange={e => setGender(e.target.value)}/>Female
      </div>
      <div>
        <output>{inBlood.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  );
}

export default App;
