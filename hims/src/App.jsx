import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='homebody'>
      <img src="logodark.png" alt="Logo" id='logo'/>
    </div>
  )
}

export default App
