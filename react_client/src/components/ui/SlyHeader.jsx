import React, { Component } from 'react'
import './SlyHeader.css'
//
import SlyButton from './SlyButton'
// import SlyNotice from './SlyNotice'

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
                        {/* <div className="comp-left">
                            <SlyButton text="Sign up" linkAddress="/users/signup" />
                        </div>
                        <div className="comp-right">
                            <SlyButton text="Log in" linkAddress="/users/login" />
                            <SlyButton text="Get started" linkAddress="/articles/getting-started" />
                        </div> */}
                        <SlyButton text="Log in" linkAddress="/users/login" />
                        <SlyButton text="Get started" linkAddress="/articles/getting-started" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SlyHeader
