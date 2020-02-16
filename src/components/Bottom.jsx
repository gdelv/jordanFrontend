import React from 'react'
import { MdLocationOn } from "react-icons/md";
export const Bottom = () => {
    return (
        <div className='bottom-container'>
            <div>
                <MdLocationOn />
                <h3>United States</h3>
            </div>
            <div>
                <h3>© 2020 Nike, Inc. All Rights Reserved</h3>
            </div>
            <div>
                <a href='/'>Guides</a>
            </div>
            <div>
                <a href='/'>Terms of Sale</a>
            </div>
            <div>
                <a href='/'>Terms of Use</a>
            </div>
            <div>
                <a href='/'>Nike Privacy Policy</a>
            </div>
        </div>
    )
}