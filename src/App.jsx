import { useState } from 'react'
import { Flecha, flecha } from './flecha/Flecha'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Flecha></Flecha>
    </>
  )
}

export default App
