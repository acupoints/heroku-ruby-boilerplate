import React, { Component } from 'react'
import './SlyNotesSearch.css'
//
import SlyHistories from './SlyHistories'
import SlyCatalogTitles from './SlyCatalogTitles'
import SlyRadishes from './SlyRadishes'

class SlyNotesSearch extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-notes-search-container">
                {/* <h1>[SlyNotesSearch]</h1> */}
                <div className="sly-notes-search-wrapper">
                    <h1>[SlyNotesSearch]</h1>
                    <SlyHistories />
                    <SlyCatalogTitles />
                    <SlyRadishes />
                </div>
            </div>
        )
    }
}

export default SlyNotesSearch
