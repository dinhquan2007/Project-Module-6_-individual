import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Order from "./components/Order";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/order/:id" element={<Order/>}/>
           <Route path="/detail/:id" element={<Detail/>}/>
       </Routes>
     </BrowserRouter>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
