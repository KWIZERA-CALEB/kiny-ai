import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Chat from './pages/Chat'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </>
  )
}


export default App