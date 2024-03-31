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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/clientinfo' element={<ClientInfo/>}/>
      <Route path='/clientcart' element={<Cart/>}/>
    </Routes>
  )
}

export default App
