import React, { Component } from 'react'
import './SlyCommonSolutions.css'
//

class SlyCommonSolutions extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-common-solutions-container">
                {/* <h1>[SlyCommonSolutions]</h1> */}
                <div className="sly-common-solutions-wrapper">
                    <h1>[SlyCommonSolutions]</h1>
                    <h4>命令行、快捷键、菜单项。。。</h4>
                    <div>
                        <span>图标</span>
                        <span>集GUI快捷键、CLI命令、环境搭建于一身的查询工具</span>
                        <span>搜索框</span>
                        <span>切换回主页的图标按钮</span>
                    </div>
                    <div>
                        <div>命令1的数据卡片,侧边带有滚动条</div>
                        <div>命令2的数据卡片,侧边带有滚动条</div>
                        <div>命令3的数据卡片,侧边带有滚动条</div>
                        <div>命令4的数据卡片,侧边带有滚动条</div>
                        <div>命令5的数据卡片,侧边带有滚动条</div>
                    </div>
                    <div>
                        <span>上一页</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>下一页</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SlyCommonSolutions
