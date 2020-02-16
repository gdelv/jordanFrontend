import React from 'react'
import '../styles/Footer.css'
import {MainLinks} from '../components/MainLinks'
import Help from '../components/Help'
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <MainLinks/>
                <Help/>
            </div>
        </>
    )
}
export default Footer