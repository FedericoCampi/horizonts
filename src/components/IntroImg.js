import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'

import '../styles/IntroImg.scss'

export const IntroImg = () => {

    // eslint-disable-next-line no-unused-vars
    const [img1, setImg1] = useState(require('../assets/walker.jpg'))

return (
    <div className='imgContainer' id="about">
        <div className='imgDiv'>
            <img src={img1} alt='' className='motorImg'>
            </img>
                <div className='introContainer'>
                    <div className='textDiv'>
                        <h4>TRAVEL ANYWHERE WITH HORIZONTS</h4>
                        <p>
                            Find the tour according to your desires and/or needs, we have special tours for online workers, where we assure you total connection 24/7!!
                        </p>
                        <p>Insured by the number one travel medical company in the world.
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
