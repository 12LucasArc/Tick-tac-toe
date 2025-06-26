import React from 'react'
import { ThemeContextProvider} from './ThemeContext.jsx';
import { GameContextProvider } from './GameContext.jsx';

function Provider({children}) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        {children}
      </GameContextProvider>
    </ThemeContextProvider>
  )
}

export default Provider