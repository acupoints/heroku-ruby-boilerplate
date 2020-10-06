import React, { Component } from 'react'
import './SlyCompLeft.css'
//
import SlyIcon from './SlyIcon'
// import SlyButton from './SlyButton'
import SlyLinkButton from './SlyLinkButton'

class SlyCompLeft extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-comp-left-container">
                {/* <h1>[SlyCompLeft]</h1> */}
                <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="indigo" />
                <div className="sly-comp-left-shadow-xs">
                    <SlyIcon size_x={75/1} size_y={75/6} rect_cx={7} fill="indigo" />
                </div>
                <SlyLinkButton text="articles" linkAddress="/users/signup" />
                <div className="sly-comp-left-shadow-sm">
                    <SlyLinkButton text="question banks" linkAddress="/users/signup" />
                    <SlyLinkButton text="surveys" linkAddress="/users/signup" />
                </div>
            </div>
        )
    }
}

export default SlyCompLeft
