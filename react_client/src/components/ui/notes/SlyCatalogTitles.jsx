import React, { Component } from 'react'
import './SlyCatalogTitles.css'
//
import SlyCatalogTitleItem from './SlyCatalogTitleItem'

class SlyCatalogTitles extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-catalogtitles-container">
                {/* <h1>[SlyCatalogTitles]</h1> */}
                <div className="sly-catalogtitles-wrapper">
                    <h1>[SlyCatalogTitles]</h1>
                    <SlyCatalogTitleItem />
                    <SlyCatalogTitleItem />
                    <SlyCatalogTitleItem />
                    <SlyCatalogTitleItem />
                    <SlyCatalogTitleItem />
                </div>
            </div>
        )
    }
}

export default SlyCatalogTitles
