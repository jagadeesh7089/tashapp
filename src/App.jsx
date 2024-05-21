import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './features/served/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
