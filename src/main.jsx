import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router";;
import './css/index.css';
import App from './App.jsx';
import { GlobalContextProvider } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </StrictMode>,
)
