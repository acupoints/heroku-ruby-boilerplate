import React, { Component } from 'react'
import './SlyCompLeft.css'
//
import SlyIcon from '../icons/SlyIcon'
// import SlyButton from './SlyButton'
import SlyLinkButton from '../menus/SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction } from '../../../flux-redux/actions'
import { setServiceItemAction, fetchUserNativeDataAction } from '../../../flux-redux/actions'


class SlyCompLeft extends Component {

    // constructor () {
    //     super()
    // }

    onSlyCommonArticles = () => {
        this.props.history.push("/my/SlyCommonArticles")
    }
    onSlyCommonQuestionBanks = () => {
        this.props.history.push("/my/SlyCommonQuestionBanks")
    }
    onSlyCommonSurveys = () => {
        this.props.history.push("/my/SlyCommonSurveys")
    }

    handleClickFeatures = () => {
        console.log("--handleClickFeatures")
        this.props.history.push("/my/SlyCommonMissingParts")
        // this.modifyServiceItem("")
        // this.modifyServiceItem("SlyCommonEcho")
        // this.refreshUserNativeData()
    }
    
    handleClickSolutions = () => {
        console.log("--handleClickSolutions")
        // this.props.history.push("/")
        this.props.history.push("/my/SlyCommonSolutions")
    }

    modifyServiceItem = (tag) => {
        return () => {
            const { setServiceItem } = this.props
            console.log(`--> ${tag}`)
            setServiceItem(tag)
        }
    }

    refreshUserNativeData = () => {
        const { astronauts, username, nativeData } = this.props
        const { fetchUserNativeData } = this.props
        const profile = {
            astronauts,
            username,
        }
        if (JSON.stringify(nativeData) === '{}') {
            fetchUserNativeData(profile)
        }
    }

    render () {
        return (
            <div className="sly-comp-left-container">
                {/* <h1>[SlyCompLeft]</h1> */}
                <SlyIcon size_x={20} size_y={20} rect_width={10/4} fill="#607d8b" dataset={[40, 40, 40]} direction="horizontal"
                funcHandle={this.handleClickFeatures} />
                <div className="sly-comp-left-shadow-sm">
                    <SlyIcon size_x={40} size_y={40} rect_width={10/4} fill="#673ab7" padding="0" direction="embedded"
                    funcHandle={this.handleClickSolutions} />
                    {/* <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="search" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="setting" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="new" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="remove" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="up" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="down" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="left" />
                    <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="right" /> */}
                </div>
                <SlyLinkButton text="articles" funcHandle={this.onSlyCommonArticles} />
                <div className="sly-comp-left-shadow-md">
                    <SlyLinkButton text="question banks" funcHandle={this.onSlyCommonQuestionBanks} />
                    <SlyLinkButton text="surveys" funcHandle={this.onSlyCommonSurveys} />
                </div>
            </div>
        )
    }
}

// export default SlyCompLeft
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
        setServiceItem: (serviceItem) => {
            dispatch(setServiceItemAction(serviceItem))
        },
        fetchUserNativeData: (profile) => {
            dispatch(fetchUserNativeDataAction(profile))
        },
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SlyCompLeft)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCompLeft))
