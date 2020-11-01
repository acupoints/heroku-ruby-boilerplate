import React, { Component } from 'react'
import './SlyNotes.css'
//
import SlyCategories from './SlyCategories'
import SlyArticles from './SlyArticles'
import SlyTraversalPages from './SlyTraversalPages'
//
import { connect } from 'react-redux'
import { setContainerHeightAction } from '../../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyNotes extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        // const {containers } = this.props
        // const { headerHeight, noticeHeight } = containers

        // const style = {
        //     paddingTop: headerHeight,
        //     paddingBottom: noticeHeight,
        // }

        return (
            <div className="sly-notes-container">
                {/* <h1>[SlyNotes]</h1> */}
                <div className="sly-notes-wrapper">
                    <h1>[SlyNotes]</h1>
                    <SlyCategories />
                    <SlyArticles />
                    <SlyTraversalPages />
                </div>
            </div>
        )
    }
}

// export default SlyNotes
//
const mapStateToProps = state => {
    return state.settingsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        setContainerHeight: (container) => {
            dispatch(setContainerHeightAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyNotes))