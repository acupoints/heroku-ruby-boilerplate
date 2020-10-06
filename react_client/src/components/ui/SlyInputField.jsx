import React, { Component } from 'react'
import './SlyInputField.css'
//
import PropTypes from 'prop-types'

class SlyInputField extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { label,type,placeholder } = this.props
        return (
            <div className="sly-input-field-container">
                {/* <h1>[SlyInputField]</h1> */}
                <label>{label}</label>
                <input className="sly-input-field" type={type} 
                    // name="email" id="email" 
                    size="26" maxLength="52" placeholder={placeholder} />
            </div>
        )
    }
}

//
SlyInputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

SlyInputField.defaultProps = {
    label: "Email",
    type: "text",
    placeholder: "text...",
}

export default SlyInputField
