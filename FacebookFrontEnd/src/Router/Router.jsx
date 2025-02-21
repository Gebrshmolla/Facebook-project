import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from '../pages/Home';
import ForgetPassword from '../pages/ForgetPassword';
import CreatAccount from '../pages/CreateAccount';

 export default function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/forgetPassword" element={<ForgetPassword/>}/>
                <Route path="/creatAccount" element={<CreatAccount/>}/>
            </Routes>
        </Router>
    );
 }
