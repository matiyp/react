import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  function calculate(e){
    e.preventDefault()
    setBmi (weight /(height * height))
  }

  return (
    <form onSubmit={calculate}>
    <h3>Calculating body mass index</h3>
    <div>
      <label>Height </label>
      <input value={height} onChange={e => setHeight(e.target.value)} type="number" name="height" id="height" />
    </div>
    <div>
      <label>Weight </label>
      <input value={weight} onChange={e => setWeight(e.target.value)}  type="number" name="weight" id="weight" />
    </div> 
    <output>{bmi.toFixed(1)}</output>
    <div></div>
    <button>Calculate</button>
  </form>
  );
}

export default App;
