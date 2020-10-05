import React, { Component } from 'react'
import './SlyHeader.css'
//

// import SlyNotice from './SlyNotice'
import SlyCompLeft from './SlyCompLeft'
import SlyCompRight from './SlyCompRight'

class SlyHeader extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-header-container">
                <div className="sly-header-wrapper">
                    {/* <SlyNotice /> */}
                    <div className="comp-all">
                        <SlyCompLeft />
                        <SlyCompRight />
                    </div>
                </div>
            </div>
        )
    }
}

export default SlyHeader
