import React, { Component } from 'react'
import './SlyChartGenerators.css'
//

class SlyChartGenerators extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-chart-generators-container">
                {/* <h1>[SlyChartGenerators]</h1> */}
                <div className="sly-chart-generators-wrapper">
                    <h1>[SlyChartGenerators]</h1>
                    <h4>图表生成器，可使用REST接口或加载Excel表格或CSV文件或JSON数据等数据源生成历史动画图形。。。</h4>
                </div>
            </div>
        )
    }
}

export default SlyChartGenerators
