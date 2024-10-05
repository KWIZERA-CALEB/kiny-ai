import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Chat from './pages/Chat'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </>
  )
}


export default App