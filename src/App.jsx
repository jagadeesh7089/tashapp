import logo from './logo.svg';
import './App.css';
import { Outlet ,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <h1>Hii</h1>
     <ul>
      <li>
        <Link to='/kaju'>Kajalbaby</Link>
        </li>
      <li>
        <Link to='/re'>Royal infield</Link>
        </li>
        
      <li>
        <Link to='/countries'>Countires</Link>
        </li>
        
        
     </ul>
     
     <Outlet></Outlet>
    </div>
  );
}

export default App;