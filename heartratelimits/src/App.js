import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState("")
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

  function calculate(e){
    e.preventDefault()
    let lowerLimit = ((220 - age)* 0.85)
    let upperLimit = ((220 - age)* 0.65)
    setUpper (lowerLimit)
    setLower (upperLimit)
  }
  

  return (
    <form onSubmit={calculate}>
      <h3>Heart rate limits calclulator</h3>
      <div>
        <p>Age</p>
        <input value={age} onChange={e => setAge(e.target.value) } type="number" />
      </div>
      <div>
        <p>Heart rate limits</p>
        <p>{lower.toFixed(0)}-{upper.toFixed(0)}</p>
      </div>
    <button class="btn btn-primary"> Calculate</button>
    <output></output>
    </form>
  );
}

export default App;
