import './App.css';
import { useEffect, useState } from 'react';
import Product from './Products';
import uuid from 'react-uuid';

function App() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    let myProducts = []
    myProducts.push(new Product(1,"Takki","Tosi lämmin takki",50,"placeholder.png"))
    myProducts.push(new Product(2,"Housut","Tiukat housut",100,"placeholder.png"))
    myProducts.push(new Product(3,"Lakki","Makee lätsä",20,"placeholder.png"))
    setProducts(myProducts)
  }, [])
  
  
  return (
    <div>
      <h1>My web shop</h1>
      {products.map(product => (
        <div key={uuid()}>
          <h3>{product.name}</h3>
          <img src={product.image} alt="placeholder"></img>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>  
  );
}

export default App;
