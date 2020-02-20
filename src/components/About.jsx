import React from 'react'
// import { FiPlus } from 'react-icons/fi'
class About extends React.Component {
    constructor () {
        super()
        this.state = {
            modal: false,
            plusClassName: ""
        }
    }
    renderHelp = () => {
        return (
        <div className='help-container'>
            <h2>About Nike</h2>
            <div className='plus-container' onClick={() => this.handleClick()}>
                <span className={`plus-line vertical ${this.state.plusClassName}`}></span>
                <span className='plus-line horizontal'></span>
            </div>
        </div>    
        )
    }
    renderLinks = () => {
        if(this.state.modal) {
        return (
            <div className='help-modal'>
                <a href='/'>News</a>
                <a href='/'>Careers</a>
                <a href='/'>Investors</a>
                <a href='/'>Purpose</a>
                <a href='/'>Sustainability</a>
                <a href='/'>CS Supply Chains Act</a>
            </div>
        )
    }
    }
    handleClick = () => {
        this.changeToMinus()
        this.setState({ modal: !this.state.modal })
    }
    changeToMinus = () => {
        if(this.state.plusClassName === "") {
            this.setState({ plusClassName: "close" })
        } else if(this.state.plusClassName === "close") {
            this.setState({ plusClassName: "" })
        }
    } 
    render() {
        return (
            <>
            {this.renderHelp()}
            {this.renderLinks()}
            </>
        )
    }
}
export default About