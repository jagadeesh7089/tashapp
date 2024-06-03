import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
function App() {
  var [products,setProducts]=useState([])
  var [selectedprod,setSelectedprod]=useState()
  var [stat,setStat]=useState(false)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>{
      setProducts(res.data)
    })
  },[])
  function dispatch(id){
    setSelectedprod(id)
    //  setStat(!stat)
  }
  return (
    <div>
      <h1>Accordian</h1>
        <div>
          {
            products?.map(prod=>{
             return <div> <p onClick={()=>{dispatch(prod.id)}} className='m-2 p-3 bg bg-dark text-white'>{prod.title} 
             <div style={ prod.id===selectedprod?{display:"block"}:{display:"none"}}>
             <p>Details</p>
              <img src={prod.image} style={{width:"20%"}}/>
              </div>
              </p>
              </div>
            })
            
          }
           
           
          
        </div>
    </div>
  );
}

export default App;
