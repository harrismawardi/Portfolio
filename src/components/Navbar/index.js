import React, { useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import {GiHamburgerMenu} from 'react-icons/gi';

import './style.css'

const Navbar = () => {

    const logo =
        <svg className='smallLogoSVG' viewBox="109 440 183 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M108.5 505.061V442H113.5V505.061H108.5Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M177.826 505.061V442H182.826V505.061H177.826Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M291.542 447.311L290.924 505.508L285.925 505.455L286.458 455.187L223.549 484.43V454.796L111.84 494.667L110.16 489.958L228.549 447.702V476.592L291.542 447.311Z" fill="black" />
        </svg>


    const [collapsed, setCollapsed] = useState(true)
    const [style, setStyle] = useState()

    useEffect(() => {
        setStyle(collapsed ? { display: 'none' } : { display: 'flex' })

    }, [collapsed])

    const clickHandler = () => {
        setCollapsed( existing => existing ? false : true)
    }

    const scrollWithOffset = (el) => {
        console.lo
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -(window.innerHeight * 0.1); 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    
    // /<NavHashLink smooth to='/#link' scroll={el => scrollWithOffset(el)}>

    return (
        <nav className="navbar">
            <div className='visible'>
                <HashLink to="/#home">{logo}</HashLink>
                <GiHamburgerMenu className='hamBurgButton' onClick={clickHandler}/>
            </div>
            <div className='myLinks' style={style}>
                <HashLink to="/#about" scroll={el => scrollWithOffset(el)} onClick={clickHandler}>about</HashLink>
                <HashLink to="/#projects" scroll={el => scrollWithOffset(el)} onClick={clickHandler}>projects</HashLink>
                <HashLink to="/contact#contact" scroll={el => scrollWithOffset(el)} onClick={clickHandler}>contact</HashLink>
            </div>

        </nav>
    )

}

export default Navbar