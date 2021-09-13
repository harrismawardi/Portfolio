import React from 'react'
import { HashLink } from 'react-router-hash-link'



const Navbar = () => {

    return (
        <nav>
            <HashLink to="/#hero">Home</HashLink>
            <HashLink to="/#about">about</HashLink>
            <HashLink to="/#projects">projects</HashLink>
            <HashLink to="/contact#contact">contact</HashLink>
        </nav>
    )

}

export default Navbar