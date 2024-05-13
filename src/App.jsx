import logo from './logo.svg';
import './App.css';
import Counter from './redux -router/counter';
import Todolist from './redux -router/todolist';
import Products from './products';

function App() {
  return (
    <div className="App">
    <h1>Hii</h1>
    <Counter></Counter>
    <Todolist></Todolist>
    <Products></Products>
    </div>
  );
}

export default App;
