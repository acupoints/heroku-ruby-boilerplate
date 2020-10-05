import React, { Component } from 'react'
import './SlyBanner.css'

class SlyBanner extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-banner-container">
                <span>By using our site, you acknowledge that 
                    you have read and understand our Cookie Policy, 
                    Privacy Policy, and our Terms of Service.</span>
                <a href="/" className="sly-notice-close">x</a>
            </div>
        )
    }
}

export default SlyBanner
