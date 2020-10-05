import React, { Component } from 'react'
import './SlyCompRight.css'
//
import SlySearch from './SlySearch'
import SlyButton from './SlyButton'
// import SlyIcon from './SlyIcon'

class SlyCompRight extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-comp-right-container">
                {/* <h1>[SlyCompRight]</h1> */}
                <SlySearch />
                <SlyButton text="Sign in" linkAddress="/users/login" />
                <SlyButton text="Get started" linkAddress="/articles/getting-started" />
                {/* <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="white" />
                <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="white" /> */}
            </div>
        )
    }
}

export default SlyCompRight
