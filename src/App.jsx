import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';


import Countries from './features/countries/countries';
import Products from './features/products/products';

function App() {
  return (
    <div className="App">
      <Products></Products>
     <Countries></Countries>
     <Counter></Counter> 
     <Todolist></Todolist> 
    </div>
  );
}

export default App;
