import React, { Component } from 'react'
import './SlyCommonEcho.css'
//
import PropTypes from 'prop-types'

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { fetchUserNativeDataAction  } from '../../../flux-redux/actions'
//
const zlstore = require('store')

class SlyCommonEcho extends Component {

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
        // const { nativeData } = this.props
        // let buttons = null
        // buttons = <>
        // {JSON.stringify(nativeData)}
        // </>

        return (
            <div className="sly-common-echo-container">
                {/* <h1>[SlyCommonEcho]</h1> */}
                <div className="sly-common-echo-wrapper">
                    <h1>[SlyCommonEcho]</h1>
                    <div>托管资产与统计图表</div>
                    {/* {buttons} */}
                </div>
            </div>
        )
    }
}

//
SlyCommonEcho.propTypes = {
    isVisible: PropTypes.bool.isRequired,
}

SlyCommonEcho.defaultProps = {
    isVisible: false,
}

// export default SlyCommonEcho
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonEcho))
