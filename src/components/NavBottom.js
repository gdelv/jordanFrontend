import React from 'react'




const NavBottom = (props) => {
    return (
        <div className={props.containerClass}>
            <div>
                <img className={props.imageClass} src={props.src}></img>
            </div>
            <div>
                <a>{props.link1}</a>
                <a>{props.link2}</a>
                <a>{props.link3}</a>
                <a>{props.link4}</a>
            </div>

        </div>
    )
}

export default NavBottom