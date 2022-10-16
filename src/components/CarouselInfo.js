import { Button } from '@mui/material';
import React from 'react';

import '../styles/CarouselInfo.scss'

export const CarouselInfo = () => {
    return (
        <>
            <div className="containerCInfo">
                <div className='titlePage'>
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
            </div>
        </>  
    );
}
export default CarouselInfo;