import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'
import Permutation from './Permutation'
import Square from './Square'
import Trisemus from './Trisemus'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/permutation" element={<Permutation/>}/>
        <Route path="/square" element={<Square/>}/>
        <Route path="/trisemus" element={<Trisemus/>}/>
      </Routes>
    </div>
  )
}

export default App