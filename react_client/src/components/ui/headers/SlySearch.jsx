import React, { Component } from 'react'
import './SlySearch.css'
//
// import D3Card from '../../D3Card'
import SlyIcon from '../icons/SlyIcon'

class SlySearch extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const wh = 24
        const style = {
            "paddingRight": wh+4*2,
        }
        return (
            <div className="sly-search-container">
                {/* <h1>[SlySearch]</h1> */}
                {/* <D3Card size_x={24} size_y={18} rect_cx={3} fill="teal" dataset={[16, 12, 15, 14, 17]} /> */}
                <SlyIcon extclass="common" size_x={wh} size_y={wh} fill="#607d8b" padding="0" direction="embedded" pattern="search" />
                <div className="sly-search-shadow-xs">
                    <input className="sly-search" type="text" autocomplete="off" style={style}
                        // name="email" id="email" 
                        maxLength="52" placeholder="Kw1,Kw2,..." />

                </div>
            </div>
        )
    }
}

export default SlySearch
