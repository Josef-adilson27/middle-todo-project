import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {StatesProvider} from './context/Context'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatesProvider>
      <App />
    </StatesProvider>
  </StrictMode>,
)
