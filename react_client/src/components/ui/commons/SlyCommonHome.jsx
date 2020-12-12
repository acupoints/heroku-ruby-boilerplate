import React, { Component } from 'react'
import './SlyCommonHome.css'
//

class SlyCommonHome extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-common-home-container">
                {/* <h1>[SlyCommonHome]</h1> */}
                <div className="sly-common-home-wrapper">
                    <h1>[SlyCommonHome]</h1>
                    <div>
                        进入主页，设置标识以显示网安链接，适时即离开主页可隐藏整个底部告示栏，以节省用户空间
                    </div>
                </div>
            </div>
        )
    }
}

export default SlyCommonHome
