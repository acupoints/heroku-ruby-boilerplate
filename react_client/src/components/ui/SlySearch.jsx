import React, { Component } from 'react'
import './SlySearch.css'
//
// import SlyIcon from './SlyIcon'
import D3Card from '../D3Card'

class SlySearch extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-search-container">
                {/* <h1>[SlySearch]</h1> */}
                <D3Card size_x={24} size_y={18} rect_cx={3} fill="teal" dataset={[16, 12, 15, 14, 17]} />
                <div className="sly-search-shadow-xs">
                    <input className="sly-search" type="text" autocomplete="off" 
                        // name="email" id="email" 
                        maxLength="52" placeholder="Kw1,Kw2,..." />

                </div>
            </div>
        )
    }
}

export default SlySearch
