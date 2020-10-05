import React, { Component } from 'react'
import './SlyHeader.css'
//
import SlyButton from './SlyButton'

class SlyHeader extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-header-container">
                <SlyButton text="Log in" linkAddress="/users/login" />
                <SlyButton text="Get started" linkAddress="/articles/getting-started" />
                <SlyButton text="Sign up" linkAddress="/users/signup" />
            </div>
        )
    }
}

export default SlyHeader
