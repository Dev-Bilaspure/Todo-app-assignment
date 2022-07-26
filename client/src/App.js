import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App