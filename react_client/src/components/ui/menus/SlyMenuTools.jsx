import React, { Component } from 'react'
import './SlyMenuTools.css'
//
// import SlyButton from './SlyButton'
import SlyIcon from '../icons/SlyIcon'
import SlyLinkButton from './SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction } from '../../../flux-redux/actions'

import SlyDivider from './SlyDivider'
import SlyMenuItem from './SlyMenuItem'

class SlyMenuTools extends Component {

    // constructor (props) {
    //     super(props)
    // }

    onSignout = () => {
        this.props.userSignout()
        this.props.history.push("/users/login")
    }
    onSlyNotes = () => {
        this.props.history.push("/my/SlyNotes")
        this.toggleMenuPanel()
    }
    onSlyNotesView = () => {
        this.props.history.push("/my/SlyNotesView")
        this.toggleMenuPanel()
    }
    onSlyNotesSearch = () => {
        this.props.history.push("/my/SlyNotesSearch")
        this.toggleMenuPanel()
    }
    onSlyNotesEdit = () => {
        this.props.history.push("/my/SlyNotesEdit")
        this.toggleMenuPanel()
    }
    onSlyPaperclip = () => {
        this.props.history.push("/my/SlyPaperclip")
        this.toggleMenuPanel()
    }
    
    handleClickTools = () => {
        console.log("--handleClickTools")
        this.toggleMenuPanel()
    }

    toggleMenuPanel = () => {
        console.log("--toggleMenuPanel")
        const { menus, addMenu, clearMenu } = this.props
        clearMenu()
        addMenu({
            tag: "menu-tools",
            visible: !menus["menu-tools"],
        })
    }

    render () {
        const { menus } = this.props
        let buttons = null
        if (menus["menu-tools"]) {
            buttons = <>
            <SlyMenuItem>
                <SlyLinkButton extraStyle="push" text="SlyNotes" funcHandle={this.onSlyNotes} />
                <SlyDivider />
                <SlyLinkButton extraStyle="push" text="SlyNotesView" funcHandle={this.onSlyNotesView} />
                <SlyLinkButton extraStyle="push" text="SlyNotesSearch" funcHandle={this.onSlyNotesSearch} />
                <SlyLinkButton extraStyle="push" text="SlyNotesEdit" funcHandle={this.onSlyNotesEdit} />
                <SlyDivider />
                <SlyLinkButton extraStyle="push" text="SlyPaperclip" funcHandle={this.onSlyPaperclip} />
                {/* <SlyLinkButton extraStyle="push" text="Sign out" funcHandle={this.onSignout} /> */}
            </SlyMenuItem>
            </>
        } else {
            buttons = <></>
        }
        return (
            <div className="sly-menu-tools-container">
                {/* <h1>[SlyMenuTools]</h1> */}
                <SlyIcon size_x={20} size_y={20} rect_width={10/3} fill="#009688" dataset={[40, 40, 40]} direction="orthogonal" shape="round"
                funcHandle={this.handleClickTools} />
                {/* <SlyMenuItem isVisible={this.state.isVisible}>
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

// export default SlyMenuTools
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

// export default connect(mapStateToProps, mapDispatchToProps)(SlyMenuTools)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMenuTools))