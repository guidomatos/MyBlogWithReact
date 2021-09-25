import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import "./styling/app.css"

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Homepage/>
        </div>
    )
}

export default App
