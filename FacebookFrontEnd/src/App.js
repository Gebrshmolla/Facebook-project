import MyForm from './pages/Formic';
import { BrowserRouter as Router,Routes,Route,link } from 'react-router-dom';
import Login from './pages/LoginPage';
function App() {
  return (
   
    <div className="App">
     <Login/>
     {/* <MyForm/> */}
    </div>
   
  );
}

export default App;
