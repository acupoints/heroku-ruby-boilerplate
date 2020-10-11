import React, { Component } from 'react'
import './SlyMenu.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from './SlyIcon'
import SlyLinkButton from './SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction } from '../../flux-redux/actions'
import SlyDivider from './SlyDivider'

class SlyMenu extends Component {

    constructor () {
        super()
        this.onSignout = this.onSignout.bind(this)
    }

    onSignout () {
        // console.log("退出")
        this.props.userSignout()
        this.props.history.push("/users/login")
    }

    render () {
        return (
            <div className="sly-menu-container">
                {/* <h1>[SlyMenu]</h1> */}
                {/* <SlyButton text="Sign out" linkAddress="/users/login" /> */}
                <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#009688" />
                <div className="sly-menu-item">
                    {/* <SlyLinkButton text="Sign out" linkAddress="/users/signup" /> */}
                    <SlyLinkButton text="New repository" funcClick={this.onSignout} />
                    <SlyLinkButton text="New gist" funcClick={this.onSignout} />
                    <SlyLinkButton text="New project" funcClick={this.onSignout} />
                    <SlyLinkButton text="New organization" funcClick={this.onSignout} />
                    <SlyDivider />
                    <SlyLinkButton text="Sign out" funcClick={this.onSignout} />
                </div>
            </div>
        )
    }
}

// export default SlyMenu
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        userSignout: () => {
            dispatch(userSignoutAction())
        },
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SlyMenu)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMenu))