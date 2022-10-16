import React from 'react'
import { useState } from 'react'

import '../styles/IntroHome.scss'

export const IntroHome = () => {

    // eslint-disable-next-line no-unused-vars
    const [img1, setImg1] = useState(require('../assets/globos.jpg'))

    // eslint-disable-next-line no-unused-vars
    const [img2, setImg2] = useState(require('../assets/antena.jpg'))

     // eslint-disable-next-line no-unused-vars
    const [img3, setImg3] = useState(require('../assets/icons/nexty.png'))

return (
    <div>
        <div className='containerDivs1'>
            <div className='divL'>
                <div className='text'>
                    <h2>Amazing sites</h2>
                    <h4>Travel with us to the most touristic places in the world.
                        See our travel packages, especially our expertly led and guided tours!
                    </h4>
                </div>
                <div className='link'>
                    <img src={img3} alt="next">
                    </img>
                </div>
            </div>
            <div className='divR'>
                <img src={img1} alt="globos">
                </img>
            </div>
        </div>
        <div className='containerDivs1'>
            <div className='divR'>
                <img src={img1} alt="globos">
                </img>
            </div>
            <div className='divL'>
                <div className='text1'>
                        <h2>Amazing sites</h2>
                        <h4>Travel with us to the most touristic places in the world.
                            See our travel packages, especially our expertly led and guided tours!
                        </h4>
                    </div>
                    <div className='link1'>
                        <img src={img3} alt="next">
                        </img>
                    </div>
            </div>
        </div>
    </div>
)
}
