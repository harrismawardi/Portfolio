import React from 'react'
import { Navbar } from './components'
import { Home, About, Projects, Contact } from './pages'


const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default App;