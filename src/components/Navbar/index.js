import React from 'react'
import { HashLink } from 'react-router-hash-link'



const Navbar = () => {

    return (
        <nav className="navbar">
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">about</HashLink>
            <HashLink to="/#projects">projects</HashLink>
            <HashLink to="/contact#contact">contact</HashLink>
        </nav>
    )

}

export default Navbar