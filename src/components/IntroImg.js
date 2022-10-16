import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'

import '../styles/IntroImg.scss'

export const IntroImg = () => {

    // eslint-disable-next-line no-unused-vars
    const [img1, setImg1] = useState(require('../assets/motorhome.jpg'))

return (
    <div className='imgContainer'>
        <div className='imgDiv'>
            <img src={img1} alt='' className='motorImg'>
            </img>
                <div className='introContainer'>
                    <div className='textDiv'>
                        <h4>TRAVEL ANYWHERE WITH FLYAL WITHOUT DISCONNECTING FOR A SECOND!!</h4>
                        <p>Starlink users can take the same high-speed, low-latency service they have at home and move it to any location.
                        </p>
                        <p>Flya offers this service with the Portability add-on for $25/month.
                        </p>
                    </div>
                    <div className='botonDiv'>
                        <div className='boton'>
                                <Button size="large">MORE INFORMATION</Button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
)
}
