import React, { Component } from 'react'
import './SlyLinkButton.css'
//
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SlyLinkButton extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text,linkAddress,funcClick } = this.props
        //
        let buttons = null
        if (linkAddress) {
            buttons = <>
                <Link to={linkAddress} className="sly-link-button">{text}</Link>
            </>
        } else {
            buttons = <>
                <button onClick={funcClick} className="sly-link-button push">{text}</button>
            </>
        }
        return (
            <div className="sly-link-button-container">
                {/* <h1>[SlyLinkButton]</h1> */}
                {/* <a href="/" className="sly-button">{text}</a> */}
                {/* <Link to={linkAddress} className="sly-link-button">{text}</Link> */}
                {buttons}
            </div>
        )
    }
}

//
SlyLinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
    funcClick: PropTypes.func.isRequired,
}

SlyLinkButton.defaultProps = {
    text: "Sign up",
    linkAddress: undefined,
    funcClick: f => f,
}

export default SlyLinkButton
