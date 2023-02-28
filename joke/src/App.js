import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

let URL = "https://api.jokes.one/jod"§

function App() {
let [title,setTitle] = useState("Loading...");
let [text,setText] = useState("Loading...");

useEffect(() => {
  axios.get(URL).then((response)=>{
    let joke = response.data.contents.jokes[0].joke;
    setTitle(joke.title)
    setText(joke.text)
  }).catch(error => {
    alert(error);
  });
},[])

  return (
    <>
    <div>
      <h1>Joke of the day with Axios</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

export default App;
