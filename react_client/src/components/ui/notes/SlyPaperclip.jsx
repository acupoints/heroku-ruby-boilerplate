import React, { Component } from 'react'
import './SlyPaperclip.css'
//

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { fetchUserNativeDataAction  } from '../../../flux-redux/actions'
//
const zlstore = require('store')

class SlyPaperclip extends Component {

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
            <div className="sly-paperclip-container">
                {/* <h1>[SlyPaperclip]</h1> */}
                <div className="sly-paperclip-wrapper">
                    <h1>[SlyPaperclip]</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyPaperclip
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyPaperclip))