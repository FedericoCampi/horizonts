import React from 'react'
import logo1 from '../assets/logo/mountain2.png'

import '../styles/HomeContent.scss'

export const HomeContent = () => {
return (
    <div className='containerHome'>
        <div className='noNone'>
            <div className='textHome'>
                <img src={logo1} alt="logo">
                </img>
                <h2>HORIZONTS</h2>
            </div>
        </div> 
        <div className='line'>

        </div>
        <div className='stats'>
            <div className='div1'>
                <div className='div11'>
                </div>
                <div className='div12'>
                    <h3>43 million</h3>
                    <p>transactions processed</p>
                </div>
                <div className='div13'>
                </div>
            </div>
            <div className='div2'>
                <div className='div21'>
                </div>
                <div className='div22'>
                    <h3>$111 million</h3>
                    <p>in taxes collected and remitted </p>
                </div>
                <div className='div23'>
                </div>
            </div>
            <div className='div3'>
                <div className='div31'>
                </div>
                <div className='div32'>
                    <h3>3,000+</h3>
                    <p>customers using Paddle</p>
                </div>
                <div className='div33'>
                </div>
            </div>
        </div>
    </div>
)
}
