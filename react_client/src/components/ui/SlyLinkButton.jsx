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
        const { text,linkAddress } = this.props
        return (
            <div className="sly-link-button-container">
                {/* <h1>[SlyLinkButton]</h1> */}
                {/* <a href="/" className="sly-button">{text}</a> */}
                <Link to={linkAddress} className="sly-link-button">{text}</Link>
            </div>
        )
    }
}

//
SlyLinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
}

SlyLinkButton.defaultProps = {
    text: "Sign up",
    linkAddress: "/",
}

export default SlyLinkButton
