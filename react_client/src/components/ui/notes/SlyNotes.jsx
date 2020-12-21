import React, { Component } from 'react'
import './SlyNotes.css'
//
// import SlyCategories from './SlyCategories'
// import SlyArticles from './SlyArticles'
// import SlyTraversalPages from './SlyTraversalPages'

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { fetchUserNativeDataAction  } from '../../../flux-redux/actions'
//
const zlstore = require('store')

class SlyNotes extends Component {

    // constructor () {
    //     super()
    // }

    componentDidMount () {
        const profile = {
            astronauts: zlstore.get("astronauts"),
            username: zlstore.get("username"),
        }
        // const { astronauts } = this.props
        // const { userRestore } = this.props
        // if (profile.astronauts && !astronauts) {
        //     userRestore(profile)
        // }
        //
        const { fetchUserNativeData } = this.props
        // const { fetchUserNativeData, nativeData } = this.props
        // if (JSON.stringify(nativeData) === '{}') {
        //     fetchUserNativeData(profile)
        // }
        fetchUserNativeData(profile)
    }

    render () {
        const { nativeData } = this.props
        const { fyrb_tags, fyrb_tools } = nativeData
        let buttons = null
        buttons = <>
        {JSON.stringify(fyrb_tags)}
        {JSON.stringify(fyrb_tools)}
        </>

        return (
            <div className="sly-notes-container">
                {/* <h1>[SlyNotes]</h1> */}
                <div className="sly-notes-wrapper">
                    <h1>[SlyNotes]</h1>
                    <h4>微博、笔记、幻灯片。。。</h4>
                    {buttons}
                    {/* <SlyCategories />
                    <SlyArticles />
                    <SlyTraversalPages /> */}
                </div>
            </div>
        )
    }
}

// export default SlyNotes
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        userSignout: () => {
            dispatch(userSignoutAction())
        },
        addMenu: (menu) => {
            dispatch(addMenuAction(menu))
        },
        removeMenu: (menu) => {
            dispatch(removeMenuAction(menu))
        },
        clearMenu: () => {
            dispatch(clearMenuAction())
        },
        fetchUserNativeData: (profile) => {
            dispatch(fetchUserNativeDataAction(profile))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyNotes))