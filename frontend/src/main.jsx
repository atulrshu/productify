import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/react';
import { BrowserRouter } from 'react-router';


//Following validation is there in youtube video but not in clerk.com  
//const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
//if (!PUBLISHABLE_KEY) {
//  throw new Error("Missing Publishable Key");
//}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </ClerkProvider>
  </StrictMode>,
)
