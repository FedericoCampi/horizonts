import { Button } from '@mui/material';
import React from 'react';
import arrow from '../assets/icons/down-arrow.png'

import '../styles/CarouselInfo.scss'

export const CarouselInfo = () => {
    return (
        <>
            <div className="containerCInfo" >
                <div className='titlePage' >
                    <div >
                        <h1>New experiences</h1>
                    </div>
                    <div className=''>
                        <h2>it's time to see the world</h2>
                    </div>
                    <div className='buttons'>
                        <Button className="buton1">GET STARTED</Button>
                        <div className="buton0"></div>
                        <Button className="buton2">READ MORE</Button>
                    </div>
                </div>
                <div className='mobileIntro'>
                        <div className='titleMobile'>
                            <h3>Horizonts</h3>
                        </div>
                    </div>
                <div className='goDown' >
                    <div className='arrowDown'>
                        <img src={arrow} alt="arrowDown">
                        </img>
                    </div>
                </div>
            </div>
        </>  
    );
}
export default CarouselInfo;