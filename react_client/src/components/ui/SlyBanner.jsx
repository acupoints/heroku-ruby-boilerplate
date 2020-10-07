import React, { Component } from 'react'
import './SlyBanner.css'
//
import SlyBulletinBoard from './SlyBulletinBoard'

class SlyBanner extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-banner-container">
                <SlyBulletinBoard />
            </div>
        )
    }
}

export default SlyBanner
