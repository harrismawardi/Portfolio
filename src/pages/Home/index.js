import React from 'react'

import { HashLink } from 'react-router-hash-link'
import { HeroLogo } from '../../components'
import './style.css'


const Home = () => {

    const scrollWithOffset = (el) => {
        console.lo
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -(window.innerHeight * 0.1); 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <section id='home'>
            <nav className="homeLinks">
                <HashLink to='/#about' scroll={el => scrollWithOffset(el)}>about</HashLink>
                <HashLink to='/#projects' scroll={el => scrollWithOffset(el)}>projects</HashLink>
                <HashLink to='/#contact' scroll={el => scrollWithOffset(el)}>contact</HashLink>
            </nav>
            <HeroLogo/>
        </section>
    )
}

export default Home