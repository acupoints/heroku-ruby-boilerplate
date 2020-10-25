import React, { Component } from 'react'
import './SlyStyleSwitchers.css'
//
import SlyStyleSwitcherItem from './SlyStyleSwitcherItem'

class SlyStyleSwitchers extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-style-switchers-container">
                {/* <h1>[SlyStyleSwitchers]</h1> */}
                <div className="sly-style-switchers-wrapper">
                    <h1>[SlyStyleSwitchers]</h1>
                    <SlyStyleSwitcherItem />
                    <SlyStyleSwitcherItem />
                    <SlyStyleSwitcherItem />
                </div>
            </div>
        )
    }
}

export default SlyStyleSwitchers
