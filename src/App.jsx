import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';


import Countries from './features/countries/countries';
import Products from './features/products/products';
import Posts from './features/posts/posts';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
