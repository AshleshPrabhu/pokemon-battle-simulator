import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
