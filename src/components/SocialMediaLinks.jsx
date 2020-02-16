import React from 'react'
import { TiSocialTwitter, TiSocialFacebook, TiSocialYoutubeCircular, TiSocialInstagram } from "react-icons/ti";
export const SocialMediaLinks = () => {
    return (
        <div className='social-media-container'>
            <div className='social-link-container'>
                <TiSocialTwitter/>
            </div>
            <div className='social-link-container'>
                <TiSocialFacebook/>
            </div>
            <div className='social-link-container'>
                <TiSocialYoutubeCircular/>
            </div>
            <div className='social-link-container'>
                <TiSocialInstagram/>
            </div>
        </div>
    )
}