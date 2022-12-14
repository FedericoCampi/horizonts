import { Button, Input, Link } from '@mui/material';
import React from 'react';
import linkin from '../assets/icons/linkedin.png'
import fb from '../assets/icons/facebook.png'
import gh from '../assets/icons/github.png'

import '../styles/Footer.scss';

export const Footer = () => {
return (
    <div className="containerFooter" id="foot">
        <div className='Lists'>
            <div className="firstDiv">
                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Top destination</p>
                    </li>
                    <li>
                        <a href='/'>Indonesia, Jakarta</a>
                    </li>
                    <li>
                        <a href='/'>Maldives, Malé</a>
                    </li>
                    <li>
                        <a  href='/'>Australia, Canberra</a>
                    </li>
                    <li>
                        <a  href='/'>Thailand, Bangkok</a>
                    </li>
                    <li>
                        <a  href='/'>Morocco, Rabat</a>
                    </li>
                </ul>
            </div>
            <div className="secondDiv">
                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Top destination</p>
                    </li>
                    <li>
                        <a href='/'>Indonesia, Jakarta</a>
                    </li>
                    <li>
                        <a href='/'>Maldives, Malé</a>
                    </li>
                    <li>
                        <a  href='/'>Australia, Canberra</a>
                    </li>
                    <li>
                        <a  href='/'>Thailand, Bangkok</a>
                    </li>
                    <li>
                        <a  href='/'>Morocco, Rabat</a>
                    </li>
                </ul>
            </div>
            <div className="thirdDiv">
                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Top destination</p>
                    </li>
                    <li>
                        <a href='/'>Indonesia, Jakarta</a>
                    </li>
                    <li>
                        <a href='/'>Maldives, Malé</a>
                    </li>
                    <li>
                        <a  href='/'>Australia, Canberra</a>
                    </li>
                    <li>
                        <a  href='/'>Thailand, Bangkok</a>
                    </li>
                    <li>
                        <a  href='/'>Morocco, Rabat</a>
                    </li>
                </ul>
            </div>
            <div className="fourthDiv">
                <p>Get a newsletter</p>
                <p>For the latest deals and tips, travel no further than your inbox</p>
                <div className="mail">
                    <Input type="email" name="email" required placeholder="Email address"></Input>
                    <Button type="submit" className="btn">Subscribe</Button>
                </div>
            </div>
        </div>
        <div className='endFooter'>
            <div className='endDiv1'>
                <h3>HORIZONTS</h3>
            </div>
            <div className='endDiv2'>
                <p>© 2022 codewithsadee. All Rights Reserved</p>
            </div>
            <div className='endDiv3'>
                <Link href="https://www.linkedin.com/in/federico-campi/" target="_blank">
                    <img src={linkin} alt='linkedin'> 
                    </img>
                </Link>
                <Link>
                    <img src={fb} alt='facebook'>
                    </img>
                </Link>
                <Link href="https://github.com/FedericoCampi" target="_blank">
                    <img src={gh} alt='github'>
                    </img>
                </Link>
            </div>
        </div>
    </div>
)
}
