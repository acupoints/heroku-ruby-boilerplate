import React, { Component } from 'react'
import './SlyButton.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SlyButton extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text,linkAddress } = this.props
        return (
            <div className="sly-button-container">
                {/* <a href="/" className="sly-button">{text}</a> */}
                <Link to={linkAddress} className="sly-button">{text}</Link>
            </div>
        )
    }
}

//
SlyButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
}

SlyButton.defaultProps = {
    text: "Sign up",
    linkAddress: "/",
}

export default SlyButton
