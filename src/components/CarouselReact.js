import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CarouselReact.scss'
import CarouselInfo from './CarouselInfo';
import OffCanvas from './OffCanvas';
import arrow from '../assets/icons/down-arrow.png'

export function CarouselReact() {

    // eslint-disable-next-line no-unused-vars
    const [img1, setImg1] = useState(require('../assets/sky.jpg'))

    // eslint-disable-next-line no-unused-vars
    const [img2, setImg2] = useState(require('../assets/sunset.jpg'))

    // eslint-disable-next-line no-unused-vars
    const [img3, setImg3] = useState(require('../assets/sunset2.jpg'))

    return (
        <>
            <div className="containerCarousel">
                <Carousel className='Carousel'>
                    <Carousel.Item className="sliderImg">
                        <img
                            className=""
                            src={img1}
                            alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item className="sliderImg">
                        <img
                            className=""
                            src={img2}
                            alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item className="sliderImg">
                        <img
                            className=""
                            src={img3}
                            alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
                <div className="containerOff">
                    <div data-aos="fade-down" data-aos-duration="2000" className="headerr">
                        <OffCanvas></OffCanvas>
                    </div>
                    <div className='mobileIntro'>
                        <div className='titleMobile'>
                            <h3>Horizonts</h3>
                        </div>
                        
                    </div>
                    <div className='CarouselInfo'>
                        <CarouselInfo></CarouselInfo>
                    </div>
                    <div className='goDown'>
                        <div className='arrowDown'>
                            <img src={arrow} alt="arrowDown">
                            </img>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    );
}
export default CarouselReact;
