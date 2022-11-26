import { useState } from 'react'
import React from "react"
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const cards = data.map(item => {
      return (
            <Card   key={item.id}
                {...item} />
        )
      })

       return (
        <div>
            <Navbar />
            <Hero/>
              <section className="cards-list">
            {cards}
            </section>
        </div>
    )

 
}

export default App
