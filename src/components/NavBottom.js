import React from 'react'




const NavBottom = (props) => {
    return (
        <div className={props.containerClass}>
            <div>
                <img className={props.imageClass} src={props.src} alt='jordan logo'></img>
            </div>
            <div className={props.linkContainer}>
                <a href='/'>{props.link1}</a>
                <a href='/'>{props.link2}</a>
                <a href='/'>{props.link3}</a>
                <a href='/'>{props.link4}</a>
            </div>
        </div>
    )
}

export default NavBottom