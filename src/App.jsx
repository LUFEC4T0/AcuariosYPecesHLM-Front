import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ClientInfo from './pages/ClientInfo'
import Cart from './pages/Cart'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainLayout/>}>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="*" element={<Login/>} />
                  <Route path='/clientinfo' element={<ClientInfo/>}/>
                  <Route path='/clientcart' element={<Cart/>}/>
              </Route>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />

          </Routes>
      </BrowserRouter>
  )
}

export default App;
