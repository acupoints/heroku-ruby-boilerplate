import React, { Component } from 'react'
import './SlyRadishes.css'
//
import SlyRadishItem from './SlyRadishItem'

class SlyRadishes extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-radishes-container">
                {/* <h1>[SlyRadishes]</h1> */}
                <div className="sly-radishes-wrapper">
                    <h1>[SlyRadishes]</h1>
                    <SlyRadishItem />
                    <SlyRadishItem />
                    <SlyRadishItem />
                    <SlyRadishItem />
                    <SlyRadishItem />
                </div>
            </div>
        )
    }
}

export default SlyRadishes
