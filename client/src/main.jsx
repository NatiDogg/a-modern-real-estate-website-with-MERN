import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './Context/AppContext.jsx'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
import QueryProvider from './Query/QueryProvider.jsx'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


createRoot(document.getElementById('root')).render(
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <BrowserRouter>
             <AppContextProvider>
                <QueryProvider>
                    <App />
                </QueryProvider>
              </AppContextProvider>
        </BrowserRouter>
     </ClerkProvider>
)
