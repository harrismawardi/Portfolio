import React from 'react'

import { HashLink } from 'react-router-hash-link'
import { HeroLogo } from '../../components'


const Home = () => {
    return (
        <section id='home'>
            <nav className="homeLinks">
                <HashLink to='/#home'>about</HashLink>
                <HashLink to='/#project'>projects</HashLink>
                <HashLink to='/#contact'>contact</HashLink>
            </nav>
            <HeroLogo/>
        </section>
    )
}

export default Home