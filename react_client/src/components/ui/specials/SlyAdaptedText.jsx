import React, { Component } from 'react'
import './SlyAdaptedText.css'
//

//

class SlyAdaptedText extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const {text} = this.props
        return (
            <div className="sly-adapted-text-container">
                {/* <h1>[SlyAdaptedText]</h1> */}
                <div className="sly-adapted-text-wrapper">
                    {/* <h1>[SlyAdaptedText]</h1> */}
                    {/* <p>adapted text wrapper</p> */}
                    {text}
                </div>
            </div>
        )
    }
}

export default SlyAdaptedText
