import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
      </Routes>
    </>
  )
}


export default App