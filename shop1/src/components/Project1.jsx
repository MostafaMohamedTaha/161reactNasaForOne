import React from 'react'
import { Carousel } from "flowbite-react";
import a from '../assets/147F0066-DE0F-4F8F-BD377DBC9B172E20_source.png'
import b from '../assets/ASY-SK1123_03.jpg'
import c from '../assets/GettyImages-1235805996.jpg'
import d from '../assets/GY9JBbrzsGsz2psUv6pgdV.jpg'
import e from '../assets/mars-landing.jpg'

const Project1 = () => {
    return (
        <div className='my-4 mx-4 h-56 sm:h-64 xl:h-80 2xl:h-96 '>
            <Carousel slideInterval={5000}>
                <img src={a} alt="" />
                <img src={b} alt="" />
                <img src={c} alt="" />
                <img src={d} alt="" />
                <img src={e} alt="" />
                

            </Carousel>
        </div>
    )
}

export default Project1
