import React, { Component } from 'react'
import './SlyPageLogin.css'
//
// import AstronautsButton from '../AstronautsButton'
import SlyInputField from './SlyInputField'
import SlyButton from './SlyButton'

class SlyPageLogin extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-page-login-container">
                <h1>[SlyPageLogin]</h1>
                <div className="sly-page-login-form">
                    <SlyInputField />
                    <SlyInputField />
                    <SlyButton text="Log in" />
                </div>
                {/* <AstronautsButton /> */}
                <p>Don’t have an account? <a href="/">Sign up</a></p>
                <p><a href="/">Forgot password?</a></p>
                
            </div>
        )
    }
}

export default SlyPageLogin
