import React from 'react'
import { ThemeContextProvider} from '../Context/ThemeContext.jsx';

function Provider({children}) {
  return (
    <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
  )
}

export default Provider