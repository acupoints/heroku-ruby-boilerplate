import React, { Component } from 'react'
import './SlyPageSignup.css'
//
import { Link } from 'react-router-dom'

class SlyPageSignup extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-page-signup-container">
                <h1>[SlyPageSignup]</h1>
                <h3>Join the *** community</h3>
                {/* <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                <p>
                    Use the power of *** inside your organization.
                </p>
                <p>
                    Already have an account?
                    <Link to="/users/login">Log in</Link>
                </p>
            </div>
        )
    }
}

export default SlyPageSignup
