import React, { useState } from 'react'

import '../styles/SectionDest.scss'

const SectionDest = () => {

    // eslint-disable-next-line no-unused-vars
    const [img1, setImg1] = useState(require('../assets/dept1.jpg'))
    // eslint-disable-next-line no-unused-vars
    const [img2, setImg2] = useState(require('../assets/dept1.jpg'))
    // eslint-disable-next-line no-unused-vars
    const [img3, setImg3] = useState(require('../assets/dept1.jpg'))
    // eslint-disable-next-line no-unused-vars
    const [img4, setImg4] = useState(require('../assets/dept1.jpg'))
    // eslint-disable-next-line no-unused-vars
    const [img5, setImg5] = useState(require('../assets/dept1.jpg'))

    return (
    <div className='containerDest'>
        <div className='titleDest'>
            <h2>Destinations</h2>
            <div className='line'></div> 
            <h4>Choose your places</h4>
        </div>
        <div className='pics'>
            <div className='firtsPics'>
                <div className='dest1'>
                    <div className='relative'>
                    <img src={img1} alt="">
                    </img>
                        <div className='country'>
                            <h5>Malé</h5>
                            <h6>Maldives</h6>
                        </div>
                    </div>
                </div>
                <div className='dest2'>
                <div className='relative'>
                    <img src={img2} alt="">
                    </img>
                        <div className='country'>
                            <h5>Malé</h5>
                            <h6>Maldives</h6>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='secondPics'>
                <div className='dest3'>
                    <div className='relative'>
                    <img src={img1} alt="">
                    </img>
                        <div className='country'>
                            <h5>Malé</h5>
                            <h6>Maldives</h6>
                        </div>
                    </div>
                </div>
                <div className='dest4'>
                <div className='relative'>
                    <img src={img2} alt="">
                    </img>
                        <div className='country'>
                            <h5>Malé</h5>
                            <h6>Maldives</h6>
                        </div>
                    </div>
                </div>
                <div className='dest5'>
                    <div className='relative'>
                    <img src={img1} alt="">
                    </img>
                        <div className='country'>
                            <h5>Malé</h5>
                            <h6>Maldives</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SectionDest