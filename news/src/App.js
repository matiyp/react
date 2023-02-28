import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details';

let URL = "https://newsapi.org/v2"
let APIKEY = "d4fd82b33f5a45988cbb0680fdc2b819"

function App() {
  let [error, setError] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [items, setItems] = useState([]);
  let [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let criteria = "top-headlines?country=us&category="
    let address = URL + "/" + criteria + "&apikey=" + APIKEY

    axios.get(address)
      .then((response) => {
        setError(null);
        setIsLoaded(true)
        setItems(response.data.articles)
      }).catch(error => {
        alert(error)
      })
  }, [])

  function close() {
    setSelectedItem(null)
  }
  if (selectedItem != null) {
    return <Details
      title={selectedItem.title}
      image={selectedItem.urlToImage}
      description={selectedItem.description}
      close={close}
    />
  }
  else if (error) {
    return <p>{error.message}</p>
  }
  else if (!isLoaded) {
    return <p>Loading...</p>
  }
  else
    return (
      <div>
        {items?.map(item => (
          <div key={item.title} onClick={e => setSelectedItem(item)}>
            <h3>{item.title}</h3>
            <img src={item.urlToImage} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
}

export default App;
