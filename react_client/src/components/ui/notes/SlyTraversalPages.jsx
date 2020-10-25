import React, { Component } from 'react'
import './SlyTraversalPages.css'
//
import SlyTraversalPageItem from './SlyTraversalPageItem'

class SlyTraversalPages extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-traversal-pages-container">
                {/* <h1>[SlyTraversalPages]</h1> */}
                <div className="sly-traversal-pages-wrapper">
                    <h1>[SlyTraversalPages]</h1>
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                    <SlyTraversalPageItem />
                </div>
            </div>
        )
    }
}

export default SlyTraversalPages
