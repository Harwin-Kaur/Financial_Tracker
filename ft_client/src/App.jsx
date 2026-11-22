import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import DefaultLayout from './components/layout/DefaultLayout';

function App() {

  toast("Show your message");

  return (
    
      <div className="wrapper">
       <Routes>
        <Route path="/" element={<DefaultLayout />}>
           <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes> 
    <ToastContainer /> 
     </div>
   
  );
}

export default App;
