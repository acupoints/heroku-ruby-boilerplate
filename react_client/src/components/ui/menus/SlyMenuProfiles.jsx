import React, { Component } from 'react'
import './SlyMenuProfiles.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from '../icons/SlyIcon'
import SlyLinkButton from './SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'

import SlyDivider from './SlyDivider'
import SlyMenuItem from './SlyMenuItem'

class SlyMenuProfiles extends Component {

    // constructor (props) {
    //     super(props)
    // }

    onSignout = () => {
        this.props.userSignout()
        this.props.history.push("/users/login")
        this.toggleMenuPanel()
    }
    onSlyYourProfiles = () => {
        this.props.history.push("/my/SlyYourProfiles")
        this.toggleMenuPanel()
    }
    onSlyYourTools = () => {
        this.props.history.push("/my/SlyYourTools")
        this.toggleMenuPanel()
    }
    onSlyDashboards = () => {
        this.props.history.push("/my/SlyDashboards")
        this.toggleMenuPanel()
    }
    onSlyBooks = () => {
        this.props.history.push("/my/SlyBooks")
        this.toggleMenuPanel()
    }
    onSlyManuals = () => {
        this.props.history.push("/my/SlyManuals")
        this.toggleMenuPanel()
    }
    onSlyWorkflows = () => {
        this.props.history.push("/my/SlyWorkflows")
        this.toggleMenuPanel()
    }
    onSlySettings = () => {
        this.props.history.push("/my/SlySettings")
        this.toggleMenuPanel()
    }

    handleClickProfiles = () => {
        console.log("--handleClickProfiles")
        this.toggleMenuPanel()
    }

    toggleMenuPanel = () => {
        console.log("--toggleMenuPanel")
        const { menus, addMenu, clearMenu } = this.props
        clearMenu()
        addMenu({
            tag: "menu-profiles",
            visible: !menus["menu-profiles"],
        })
    }

    render () {
        const { menus } = this.props
        let buttons = null
        if (menus["menu-profiles"]) {
            buttons = <>
            <SlyMenuItem>
                <SlyLinkButton extraStyle="push" text="SlyYourProfiles" funcHandle={this.onSlyYourProfiles} />
                <SlyLinkButton extraStyle="push" text="SlyYourTools" funcHandle={this.onSlyYourTools} />
                <SlyDivider />
                <SlyLinkButton extraStyle="push" text="SlyDashboards" funcHandle={this.onSlyDashboards} />
                <SlyLinkButton extraStyle="push" text="SlyBooks" funcHandle={this.onSlyBooks} />
                <SlyLinkButton extraStyle="push" text="SlyManuals" funcHandle={this.onSlyManuals} />
                <SlyLinkButton extraStyle="push" text="SlyWorkflows" funcHandle={this.onSlyWorkflows} />
                <SlyLinkButton extraStyle="push" text="SlySettings" funcHandle={this.onSlySettings} />
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

// export default connect(mapStateToProps, mapDispatchToProps)(SlyMenuProfiles)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMenuProfiles))