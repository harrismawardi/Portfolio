import React, { useEffect, useState } from 'react'
import './style.css'

import { css, html, javascript, mongodb, nodejs, postgresql, react, redux } from '../../images'


const About = () => {
    //slides will move to the store enventually
    const [logos, setLogos] = useState([css, html, javascript, mongodb, nodejs, postgresql, react, redux, 9])
    const [slide, setSlide] = useState(1)
    const [buttons, setButtons] = useState()
    const [logoElements, setLogoElements] = useState()


    const setActive = e => {
        const slideNum = e.target.id.split('-')[1]
        setSlide(slideNum)
    }

    useEffect(() => {
        const buttonsArr = []
        for (let i = 0; i < logos.length / 4; i++) {
            buttonsArr.push(<button id={`logos-${i + 1}`} key={i} onClick={setActive}>hello</button>)
        }
        setButtons(buttonsArr)
    }, [logos])

    // C:\Users\Harris\portfolio\src\images\css.svg
    useEffect(() => {
        setLogoElements(() => {
            const previousSlide = slide - 1;
            const elements = []
            for (let i = (previousSlide * 4); i < (slide * 4); i++) {
                if (logos[i]) {
                    elements.push(<img className='techLogos' src={logos[i]} alt={`${logos[i]}-icon`} />)
                }
            }
            return elements;
        })
    }, [slide])


    return (
        <section id="about">
            <div className='welcome'>
                <span>Hi,</span>
                <span>my name is</span>
                <span>Harris Mawardi.</span>
            </div>
            <div className='intro'>
                <span>I am a full stack software developer trained in:</span>
            </div>
            <div className='logoCarousel'>
                {logoElements}
            </div>
            <div className='buttonSelects'>
                {buttons}
            </div>
        </section>
    )
}

export default About