import React, { Component } from 'react'
import './SlySearch.css'
//

class SlySearch extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-search-container">
                {/* <h1>[SlySearch]</h1> */}
                <input className="sly-search" type="text" 
                    maxLength="52" placeholder="Kw1,Kw2,..." />
            </div>
        )
    }
}

export default SlySearch
