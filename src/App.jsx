import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className="border border-2 border-info p-2">
      <h1>App</h1>
        <Counter></Counter> 
        <Todolist></Todolist>
    </div>
  );
}

export default App;
