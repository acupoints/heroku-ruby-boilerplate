import React, { Component } from 'react'
import './SlyBulletinBoard.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from './icons/SlyIcon'

class SlyBulletinBoard extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-bulletin-board-container">
                {/* <h1>[SlyBulletinBoard]</h1> */}
                <div className="sly-bulletin-board-wrapper">
                    {/* <div className="comp-all"></div> */}
                    <div className="sly-comp-left-shadow">
                        By using our site, you acknowledge that 
                        you have read and understand our Cookie Policy, 
                        Privacy Policy, and our Terms of Service.
                    </div>
                    <div className="sly-comp-right-shadow">
                        {/* <SlyButton text="X" linkAddress="/articles/getting-started" /> */}
                        <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#9E9E9E" />
                    </div>
                </div>
                <div className="sly-comp-public-shadow">
                    <a href="http://beian.miit.gov.cn">粤ICP备2020123124号-1</a>
                </div>
            </div>
        )
    }
}

export default SlyBulletinBoard
