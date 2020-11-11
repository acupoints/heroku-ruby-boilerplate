import React, { Component } from 'react'
import './SlyLoginPrompt.css'
//
import PropTypes from 'prop-types'

//

class SlyLoginPrompt extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text } = this.props
        return (
            <div className="sly-login-prompt-container">
                {/* <h1>[SlyLoginPrompt]</h1> */}
                {/* <div className="sly-login-prompt-wrapper">
                    <h1>[SlyLoginPrompt]</h1>
                </div> */}
                {text}
            </div>
        )
    }
}

//
SlyLoginPrompt.propTypes = {
    text: PropTypes.string.isRequired,
}

SlyLoginPrompt.defaultProps = {
    text: "",
}

export default SlyLoginPrompt
