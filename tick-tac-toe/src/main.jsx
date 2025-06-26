import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './Context/ThemeContext';
import { GameContextProvide } from './Context/GameContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <GameContextProvide>
         <App />
      </GameContextProvide>
    </ThemeContextProvider>
  </StrictMode>,
)
