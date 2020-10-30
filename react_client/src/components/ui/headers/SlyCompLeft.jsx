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
    }
    
    handleClickSolutions = () => {
        console.log("--handleClickSolutions")
        // this.props.history.push("/")
        this.props.history.push("/my/SlyCommonSolutions")
    }


    render () {
        return (
            <div className="sly-comp-left-container">
                {/* <h1>[SlyCompLeft]</h1> */}
                <SlyIcon size_x={20} size_y={20} rect_width={10/4} fill="indigo" dataset={[40, 40, 40]} direction="orthogonal"
                funcHandle={this.handleClickFeatures} />
                <div className="sly-comp-left-shadow-sm">
                    <SlyIcon size_x={75/1} size_y={75/6} rect_cx={7} fill="indigo"
                    funcHandle={this.handleClickSolutions} />
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
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SlyCompLeft)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCompLeft))
