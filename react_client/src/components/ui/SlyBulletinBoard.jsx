import React, { Component } from 'react'
import './SlyBulletinBoard.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from './icons/SlyIcon'
import net_security from '../../../public/net_security.png'

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
                <div className="sly-comp-public-shadow">
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702003499">
                        <img src={net_security} alt="net_security" />
                        粤公网安备 44030702003499号
                    </a>
                </div>
            </div>
        )
    }
}

export default SlyBulletinBoard
