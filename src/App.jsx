import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  var [products,setProducts]=useState([])
  var [selectedprod,setSelectedprod]=useState({id:0,statu:false})

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>{
      setProducts(res.data)
    })
  },[])

  function dispatch(i){
     setSelectedprod({id:i,statu:!selectedprod.statu})
  }
  return (
    <div>
        {
          products?.map(prod=>{
           return <div className='m-2 p-3 bg bg-dark text-white'>
             <div onClick={()=>{dispatch(prod.id)}} ><p>{prod.title} <i class="bi bi-plus-circle"></i></p></div>
             <div style={(prod.id===selectedprod.id && selectedprod.statu)?{display:"block"}:{display:"none"}}>
              <h4>Details</h4>
             </div>
             </div>
          })
        }
    </div>
  );
}

export default App;
