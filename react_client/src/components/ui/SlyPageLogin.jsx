import React, { Component } from 'react'
import './SlyPageLogin.css'
//
import AstronautsButton from '../AstronautsButton'

class SlyPageLogin extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-page-login-container">
                <h1>[SlyPageLogin]</h1>
                <AstronautsButton />
            </div>
        )
    }
}

export default SlyPageLogin
