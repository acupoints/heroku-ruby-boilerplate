import React, { Component } from 'react'
import './SlyNotes.css'
//
import SlyCategories from './SlyCategories'
import SlyArticles from './SlyArticles'
import SlyTraversalPages from './SlyTraversalPages'

class SlyNotes extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-notes-container">
                {/* <h1>[SlyNotes]</h1> */}
                <div className="sly-notes-wrapper">
                    <h1>[SlyNotes]</h1>
                    <SlyCategories />
                    <SlyArticles />
                    <SlyTraversalPages />
                </div>
            </div>
        )
    }
}

export default SlyNotes
