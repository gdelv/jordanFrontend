import React from 'react'
import '../styles/Footer.css'
import { MainLinks } from '../components/MainLinks'
import Help from '../components/Help'
import About from '../components/About'
import { Bottom } from '../components/Bottom'
import { SocialMediaLinks } from "../components/SocialMediaLinks";
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <MainLinks/>
                <Help/>
                <About/>
                <SocialMediaLinks/>
                <Bottom/>
            </div>
        </>
    )
}
export default Footer