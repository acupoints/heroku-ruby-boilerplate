import React, { Component } from 'react'
import './SlyPageLogin.css'
//
// import AstronautsButton from '../AstronautsButton'
import SlyInputField from './SlyInputField'
import SlyButton from './SlyButton'
import { Link } from 'react-router-dom'
import D3Card from '../D3Card'

class SlyPageLogin extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-page-content">
                <D3Card />
                <div className="sly-page-login-container">
                    {/* <h1>[SlyPageLogin]</h1> */}
                    <h1>Sign in to FyHub</h1>
                    <div className="sly-page-login-form">
                        <SlyInputField label="Email" type="email" placeholder="email..." />
                        <SlyInputField label="Password" type="password" placeholder="password..." />
                        <SlyButton text="Log in" />
                    </div>
                    {/* <AstronautsButton /> */}
                    <p>
                        Don’t have an account?
                        <Link to="/users/signup">Sign up</Link>
                    </p>
                    <p>
                        <Link to="/">Forgot password?</Link>
                    </p>
                    
                </div>
            </div>
        )
    }
}

export default SlyPageLogin
