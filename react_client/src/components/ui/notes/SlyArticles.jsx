import React, { Component } from 'react'
import './SlyArticles.css'
//
import SlyArticleItem from './SlyArticleItem'

class SlyArticles extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-articles-container">
                {/* <h1>[SlyArticles]</h1> */}
                <div className="sly-articles-wrapper">
                    <h1>[SlyArticles]</h1>
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                    <SlyArticleItem />
                </div>
            </div>
        )
    }
}

export default SlyArticles
