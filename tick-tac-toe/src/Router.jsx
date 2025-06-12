import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Details from './Pages/Details/Details.jsx'
import Game from './Pages/Game/Game.jsx'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/game-on" element={<Game />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router