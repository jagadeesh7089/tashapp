import logo from './logo.svg';
import './App.css';
import Parent from './use context/parent';
import { MyContext } from './Mycontext';

function App() {
 
  return (
   <MyContext.Provider value={"code your career"}>
    <div className="border border-2 border-info p-2">
        <h1> App</h1>
        <Parent></Parent>
    </div>
    </MyContext.Provider>
  );
}

export default App;
