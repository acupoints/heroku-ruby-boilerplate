import React, { Component } from 'react'
import './SlyMenuProfiles.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from './SlyIcon'
import SlyLinkButton from './SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction } from '../../flux-redux/actions'
import SlyDivider from './SlyDivider'
import SlyMenuItem from './SlyMenuItem'

class SlyMenuProfiles extends Component {

    constructor (props) {
        super(props)
        // this.onSignout = this.onSignout.bind(this)
        // this.handleClickProfiles = this.handleClickProfiles.bind(this)
        this.state = {
            isVisible: false
        }
    }

    onSignout = () => {
        // console.log("退出")
        this.props.userSignout()
        this.props.history.push("/users/login")
    }

    handleClickProfiles = () => {
        console.log("--handleClickProfiles")
        this.toggleMenuPanel()
    }

    toggleMenuPanel = () => {
        console.log("--toggleMenuPanel")
        this.setState({isVisible: !this.state.isVisible});
    }

    render () {
        let buttons = null
        if (this.state.isVisible) {
            buttons = <>
            <SlyMenuItem>
                <SlyLinkButton extraStyle="push" text="New repository" funcHandle={this.onSignout} />
                <SlyLinkButton extraStyle="push" text="New gist" funcHandle={this.onSignout} />
                <SlyLinkButton extraStyle="push" text="New project" funcHandle={this.onSignout} />
                <SlyLinkButton extraStyle="push" text="New organization" funcHandle={this.onSignout} />
                <SlyLinkButton extraStyle="push" text="New SlyPaperclip" linkAddress="/my/SlyPaperclip" />
                <SlyDivider />
                <SlyLinkButton extraStyle="push" text="Sign out" funcHandle={this.onSignout} />
            </SlyMenuItem>
            </>
        } else {
            buttons = <></>
        }
        return (
            <div className="sly-menu-profiles-container">
                {/* <h1>[SlyMenuProfiles]</h1> */}
                <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#9E9E9E"
                funcHandle={this.handleClickProfiles} />
                {/* <SlyMenuItem>
                    <SlyLinkButton extraStyle="push" text="New repository" funcHandle={this.onSignout} />
                    <SlyLinkButton extraStyle="push" text="New gist" funcHandle={this.onSignout} />
                    <SlyLinkButton extraStyle="push" text="New project" funcHandle={this.onSignout} />
                    <SlyLinkButton extraStyle="push" text="New organization" funcHandle={this.onSignout} />
                    <SlyLinkButton extraStyle="push" text="New SlyPaperclip" linkAddress="/my/SlyPaperclip" />
                    <SlyDivider />
                    <SlyLinkButton extraStyle="push" text="Sign out" funcHandle={this.onSignout} />
                </SlyMenuItem> */}
                {buttons}
            </div>
        )
    }
}

// export default SlyMenuProfiles
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

// export default connect(mapStateToProps, mapDispatchToProps)(SlyMenuProfiles)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMenuProfiles))