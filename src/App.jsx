import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>Hii</h1>
    <div className='d-flex justify-content-between w-25 m-2'>
    <Link to="counter">Counter</Link>
    <Link to="todolist">Todolist</Link>
    <Link to="products">Products</Link>
    </div>

    <Outlet></Outlet>
    </div>
  

  );
}

export default App;
