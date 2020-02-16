import React from 'react'
import '../styles/Landing.css'

class Landing extends React.Component {
    render () {
        return (
            <>
            <div className='please'>
                <img className='kemba' src='https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/d4863db8-8104-4012-929f-e22a741795a0/jordan.jpg'></img>
            </div>
            <div className='kemba-title'>
                <h2>JORDAN NBA ALL-STAR 2020 COLLECTION</h2>
                <a>Shop</a>
            </div>
            </>
        )
    }
}

export default Landing