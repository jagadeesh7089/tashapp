import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todolist from './Todolist';
import Products from './products';


function App(props) {
  console.log("app",props)
  return (
    <div className="border border-2 border-info p-2">
      
        <Counter></Counter> 
        <Todolist></Todolist>
        <Products></Products>
    </div>
  );
}

export default (App)
