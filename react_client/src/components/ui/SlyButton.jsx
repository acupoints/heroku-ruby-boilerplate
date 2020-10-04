import React, { Component } from 'react'
import './SlyButton.css'
import PropTypes from 'prop-types'

class SlyButton extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text } = this.props
        return (
            <div className="sly-button-container">
                <a href="/" className="sly-button">{text}</a>
            </div>
        )
    }
}

//
SlyButton.propTypes = {
    text: PropTypes.string.isRequired,
}

SlyButton.defaultProps = {
    text: "Sign up"
}


export default SlyButton
