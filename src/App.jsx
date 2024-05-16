import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';

function App() {
  return (
    <div className="App">
     <h1>Hii</h1>
     <Counter></Counter>
     <Todolist></Todolist>
    </div>
  );
}

export default App;
