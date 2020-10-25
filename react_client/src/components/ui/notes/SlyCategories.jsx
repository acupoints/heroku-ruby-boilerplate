import React, { Component } from 'react'
import './SlyCategories.css'
//
import SlyCategoryItem from './SlyCategoryItem'

class SlyCategories extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-categories-container">
                {/* <h1>[SlyCategories]</h1> */}
                <div className="sly-categories-wrapper">
                    <h1>[SlyCategories]</h1>
                    <SlyCategoryItem />
                    <SlyCategoryItem />
                    <SlyCategoryItem />
                </div>
            </div>
        )
    }
}

export default SlyCategories
