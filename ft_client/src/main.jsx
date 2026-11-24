import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


export const UserContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={{ name: "Harwin", add: "Launceston"}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>,
)
