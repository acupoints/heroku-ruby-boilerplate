import React, { Component } from 'react'
import './SlyHistories.css'
//
import SlyHistoryItem from './SlyHistoryItem'

class SlyHistories extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-histories-container">
                {/* <h1>[SlyHistories]</h1> */}
                <div className="sly-histories-wrapper">
                    <h1>[SlyHistories]</h1>
                    <SlyHistoryItem />
                    <SlyHistoryItem />
                    <SlyHistoryItem />
                    <SlyHistoryItem />
                    <SlyHistoryItem />
                </div>
            </div>
        )
    }
}

export default SlyHistories
