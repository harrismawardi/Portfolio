import React from 'react'
import { Navbar } from './components'
import { Home, About } from './pages'


const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <section id='projects'>yo</section>
            <section id='contact'>holla</section>
        </>
    )
}

export default App;