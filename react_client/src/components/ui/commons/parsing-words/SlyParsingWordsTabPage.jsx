import React, { Component } from 'react'
import './SlyParsingWordsTabPage.css'
//
// import SlyMenuItem from '../menus/SlyMenuItem'
// import SlyLinkButton from '../../menus/SlyLinkButton'
import SlyServiceItem from '../../services/SlyServiceItem'
import SlyIcon from '../../icons/SlyIcon'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../../flux-redux/actions'


class SlyParsingWordsTabPage extends Component {

    // constructor () {
    //     super()
    // }

    modifySelectedItem = (tag) => {
        return () => {
            const { setSelectedItem } = this.props
            console.log(`--> ${tag}`)
            setSelectedItem({
                tag: "tagTabPage",
                selected: tag,
                target: "parsing_words",
            })
        }
    }

    render () {
        let buttons = null
        buttons = <>
        <SlyServiceItem direction="vertical">
            {/* <SlyLinkButton extraStyle="push" text="history" funcHandle={this.modifySelectedItem("history")} />
            <SlyLinkButton extraStyle="push" text="edit" funcHandle={this.modifySelectedItem("edit")} />
            <SlyLinkButton extraStyle="push" text="remove" funcHandle={this.modifySelectedItem("remove")} /> */}
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="clock"
                funcHandle={this.modifySelectedItem("history")} />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="feather"
                funcHandle={this.modifySelectedItem("edit")} />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="topper"
                funcHandle={this.modifySelectedItem("remove")} />
            
            {/* <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="download" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="upload" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="dismiss" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="depots" /> */}

            {/* <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="search" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="setting" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="new" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="remove" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="up" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="down" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="left" />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="right" /> */}

        </SlyServiceItem>
        </>
        return (
            <div className="sly-parsing-words-tab-page-container">
                {/* <h1>[SlyParsingWordsTabPage]</h1> */}
                <div className="sly-parsing-words-tab-page-wrapper">
                    {/* <h1>SlyParsingWordsTabPage</h1> */}
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyParsingWordsTabPage
//
const mapStateToProps = state => {
    // return state.astronautsReducer
    return {
        ...state.astronautsReducer,
        ...state.settingsReducer,
    }
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
        setSelectedItem: (container) => {
            dispatch(setSelectedItemAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyParsingWordsTabPage))
