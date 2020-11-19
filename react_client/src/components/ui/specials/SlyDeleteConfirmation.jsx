import React, { Component } from 'react'
import './SlyDeleteConfirmation.css'
//

//
import SlyAdaptedText from './SlyAdaptedText'
import SlyAdaptedButton from './SlyAdaptedButton'
import SlyAdaptedInputField from './SlyAdaptedInputField'

class SlyDeleteConfirmation extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-delete-confirmation-container">
                {/* <h1>[SlyDeleteConfirmation]</h1> */}
                <div className="sly-delete-confirmation-wrapper">
                    {/* <h1>[SlyDeleteConfirmation]</h1> */}
                    <SlyAdaptedText />
                    <SlyAdaptedInputField />
                    <SlyAdaptedButton />
                </div>
            </div>
        )
    }
}

export default SlyDeleteConfirmation
