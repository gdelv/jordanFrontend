import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
import { IoIosMenu } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'
// import Counter from '../components/Counter'
import NavBottom from '../components/NavBottom'

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            height: 0
        };
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if (window.pageYOffset > 40) {
            console.log('scrolled')

            this.setState({
                visible: false,
            })
        } else {
            this.setState({
                visible: true,
            })
        }
    }

    render() {
        return (
            <>
            <nav 
            class={this.state.visible ? 'nav-bar' : 'nav-hidden'}
            ref={(divElement) => {this.divElement = divElement}}
            >
                <div>
                    <img class='logo' src='https://i.imgur.com/iB0cdid.png'></img>
                </div>
                <div class='right-nav'>
                    <FiSearch
        
                        size='1.5rem'
                    />
                    <div >
                    <NavLink exact to='/cart'>
                        <IoMdCart
                            size='1.5rem'
                        />
                        {/* <>{props.renderCounter}</> */}
                    </NavLink>
                    </div>
                    
                    <IoIosMenu
                    // onClick={props.onClick}
                    size='1.5rem'
                    />
        
                </div>
            </nav>
            <NavBottom
                src='https://www.nike.com/assets/experience/ciclp/static/v2/967-923697ad62d/static/icons/jordan.svg'
                link1='New Releases'
                link2='Men'
                link3='Women'
                link4='Kids'
                containerClass={this.state.visible ? 'bottom' : 'new-nav'}
                imageClass='jordan-logo'
                linkContainer='link-container'
                

            />

            </>

        )

    }

}









export default Nav



