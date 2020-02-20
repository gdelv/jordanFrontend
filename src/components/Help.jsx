import React from 'react'
// import { FiPlus } from 'react-icons/fi'
class Help extends React.Component {
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
            <h2>Get help</h2>
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
                <a href='/'>Order Status</a>
                <a href='/'>Shipping and Delivery</a>
                <a href='/'>Returns</a>
                <a href='/'>Payment Options</a>
                <a href='/'>Gift Card Balance</a>
                <a href='/'>Contact Us</a>
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
export default Help