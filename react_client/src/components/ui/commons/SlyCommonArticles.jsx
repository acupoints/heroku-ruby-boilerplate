import React, { Component } from 'react'
import './SlyCommonArticles.css'
//

class SlyCommonArticles extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-common-articles-container">
                {/* <h1>[SlyCommonArticles]</h1> */}
                <div className="sly-common-articles-wrapper">
                    <h1>[SlyCommonArticles]</h1>
                    <h4>技术文档、操作手册、使用说明。。。</h4>
                    <div>
                        <span>图标</span>
                        <span>自问自答，多种方案</span>
                        <span>搜索框</span>
                        <span>切换回主页的图标按钮</span>
                    </div>
                    <div>
                        <div>文章1的数据卡片,侧边带有滚动条</div>
                        <div>文章2的数据卡片,侧边带有滚动条</div>
                        <div>文章3的数据卡片,侧边带有滚动条</div>
                        <div>文章4的数据卡片,侧边带有滚动条</div>
                        <div>文章5的数据卡片,侧边带有滚动条</div>
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

export default SlyCommonArticles
