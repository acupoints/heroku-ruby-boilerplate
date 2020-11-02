import React, { Component } from 'react'
import './SlyCommonMissingParts.css'
//
import SlyCommonPrograms from './SlyCommonPrograms'
import SlyCommonExceptions from './SlyCommonExceptions'

class SlyCommonMissingParts extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-common-missing-parts-container">
                {/* <h1>[SlyCommonMissingParts]</h1> */}
                <div className="sly-common-missing-parts-wrapper">
                    <h1>[SlyCommonMissingParts]</h1>
                    <SlyCommonPrograms />
                    <SlyCommonExceptions />
                </div>
            </div>
        )
    }
}

export default SlyCommonMissingParts
