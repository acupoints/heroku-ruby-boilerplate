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
        const { title } = this.props
        return (
            <div className="sly-delete-confirmation-container">
                {/* <h1>[SlyDeleteConfirmation]</h1> */}
                <div className="sly-delete-confirmation-wrapper">
                    {/* <h1>[SlyDeleteConfirmation]</h1> */}
                    <SlyAdaptedText text={`This will delete the entry (${title}). You cannot undo this action.
To confirm, please enter your entry title:`} />
                    <SlyAdaptedInputField />
                    <SlyAdaptedButton />
                </div>
            </div>
        )
    }
}

export default SlyDeleteConfirmation
