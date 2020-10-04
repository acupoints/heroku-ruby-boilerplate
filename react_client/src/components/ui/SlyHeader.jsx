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
                <SlyButton text="Log in" />
                <SlyButton text="Get started" />
                <SlyButton />
            </div>
        )
    }
}

export default SlyHeader
