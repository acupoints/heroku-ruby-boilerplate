import React, { Component } from 'react'
import './SlyNotesView.css'
//
import SlyCatalogTitles from './SlyCatalogTitles'
import SlyRadishes from './SlyRadishes'

class SlyNotesView extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-notes-view-container">
                {/* <h1>[SlyNotesView]</h1> */}
                <div className="sly-notes-view-wrapper">
                    <h1>[SlyNotesView]</h1>
                    <SlyCatalogTitles />
                    <SlyRadishes />
                </div>
            </div>
        )
    }
}

export default SlyNotesView
