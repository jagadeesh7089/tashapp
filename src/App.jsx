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
            return <div className='m-2 p-3 bg bg-dark text-white' onClick={()=>{dispatch(prod.id)}}>  <div className='d-flex justify-content-between'><p>{prod.title} </p><i class="bi bi-plus-circle"></i> </div>
            <div style={prod.id===selectedprod?{display:"block"}:{display:"none"}} className='w-25 bg bg-warning shadow-lg'>
              <h1>Details</h1>
              <p>{prod.title}</p>
              <img src={prod.image} className='w-25'/>
            </div>
            </div>
            

          })
        }
        </div>  
            
          
           
           
          
  
    </div>
  );
}

export default App;
