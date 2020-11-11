import React, { Component } from 'react'
import './SlyCompRight.css'
//
import SlySearch from './SlySearch'
import SlyButton from '../SlyButton'
// import SlyIcon from './SlyIcon'
import SlyMenuTools from '../menus/SlyMenuTools'
import SlyMenuProfiles from '../menus/SlyMenuProfiles'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userRestoreAction } from '../../../flux-redux/actions'
import { fetchUserNativeDataAction } from '../../../flux-redux/actions'
//
const zlstore = require('store')

class SlyCompRight extends Component {

    // constructor () {
    //     super()
    // }

    componentDidMount () {
        const profile = {
            astronauts: zlstore.get("astronauts"),
            username: zlstore.get("username"),
        }
        const { astronauts } = this.props
        const { userRestore } = this.props
        if (profile.astronauts && !astronauts) {
            userRestore(profile)
        }
        //
        // const { fetchUserNativeData, nativeData } = this.props
        // if (JSON.stringify(nativeData) === '{}') {
        //     fetchUserNativeData(profile)
        // }
    }

    render () {
        const { astronauts } = this.props
        const profile = {
            astronauts: zlstore.get("astronauts"),
            username: zlstore.get("username"),
        }
        
        //
        let buttons = null
        if (astronauts||profile.astronauts) {
            buttons = <>
                <SlyMenuTools />
                <SlyMenuProfiles />
                {/* <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#9E9E9E" /> */}
                {/* <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#1B78D6" /> */}
            </>
        } else {
            buttons = <>
                <SlyButton text="Sign in" linkAddress="/users/login" />
                <SlyButton text="Get started" linkAddress="/articles/getting-started" />
            </>
        }
        return (
            <div className="sly-comp-right-container">
                {/* <h1>[SlyCompRight]</h1> */}
                <SlySearch />
                {buttons}
                
            </div>
        )
    }
}

// export default SlyCompRight
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        userRestore: (profile) => {
            dispatch(userRestoreAction(profile))
        },
        fetchUserNativeData: (profile) => {
            dispatch(fetchUserNativeDataAction(profile))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCompRight))