import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import './style.css'

const About = () => {

    const [logos, setLogos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [slide, setSlide] = useState()
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


    useEffect(() => {
        setLogoElements(() => {
            const previousSlide = slide - 1;
            const elements = []
            for (let i = (previousSlide * 4); i < (slide * 4); i++) {
                elements.push(<div key={i}>{logos[i]}</div>)
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