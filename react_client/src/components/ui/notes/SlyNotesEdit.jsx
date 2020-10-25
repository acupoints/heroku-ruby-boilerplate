import React, { Component } from 'react'
import './SlyNotesEdit.css'
//
import SlyHistories from './SlyHistories'
import SlyRadishes from './SlyRadishes'
import SlyStyleSwitchers from './SlyStyleSwitchers'

class SlyNotesEdit extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-notes-edit-container">
                {/* <h1>[SlyNotesEdit]</h1> */}
                <div className="sly-notes-edit-wrapper">
                    <h1>[SlyNotesEdit]</h1>
                    <SlyHistories />
                    <SlyRadishes />
                    <SlyStyleSwitchers />
                </div>
            </div>
        )
    }
}

export default SlyNotesEdit
