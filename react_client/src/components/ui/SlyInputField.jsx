import React, { Component } from 'react'
import './SlyInputField.css'
//

class SlyInputField extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-input-field-container">
                <label>SlyInputField</label>
                <input className="sly-input-field" type="text" 
                    size="30" maxLength="100" placeholder="text..." />
            </div>
        )
    }
}

export default SlyInputField
