import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import ClientInfo from './pages/ClientInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClientInfo/>
    </>
  )
}

export default App
