import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Order from "./components/Order";
import Detail from "./components/detail/Detail";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import History from "./components/History";
import Ticket from "./components/Ticket";

function App() {
    return (
        <div className="App">
            <PayPalScriptProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/order/:id" element={<Order/>}/>
                        <Route path="/detail/:id" element={<Detail/>}/>
                        <Route path="/history" element={<History/>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer/>
            </PayPalScriptProvider>
        </div>
    );
}

export default App;
