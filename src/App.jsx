import { useState } from 'react'
import React from "react"
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
             <Navbar/>
    <Hero/>
            <Card />
            </>
        )

 
}

export default App
