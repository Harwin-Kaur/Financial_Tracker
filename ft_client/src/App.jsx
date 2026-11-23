import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import DefaultLayout from './components/layout/DefaultLayout';
import Auth from '../src/auth/Auth.jsx';

function App() {

  toast("Show your message");

  return (
    
      <div className="wrapper">
       <Routes>
        <Route path="/" element={<DefaultLayout />}>
           <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element= {<Auth> <Dashboard /> </Auth> } />
          <Route path="transaction" element= {<Auth> <Transaction /> </Auth>} />
        </Route>
      </Routes> 
    <ToastContainer /> 
     </div>
   
  );
}

export default App;
