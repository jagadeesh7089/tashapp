import logo from './logo.svg';
import './App.css';
import ControlledComponent from './controled';
import UncontrolledComponent from './uncontroled';

function App() {
  return (
    <div className="App">
     <ControlledComponent></ControlledComponent>

     <UncontrolledComponent></UncontrolledComponent>
    </div>
  );
}

export default App;
