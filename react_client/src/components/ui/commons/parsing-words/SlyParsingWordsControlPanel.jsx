import React, { Component } from 'react'
import './SlyParsingWordsControlPanel.css'
//
// import SlyMenuItem from '../menus/SlyMenuItem'
import SlyLinkButton from '../../menus/SlyLinkButton'
import SlyServiceItem from '../../services/SlyServiceItem'
import SlyIcon from '../../icons/SlyIcon'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../../flux-redux/actions'


class SlyParsingWordsControlPanel extends Component {

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

    onReset = () => {
        console.log("--> onReset")
    }
    onSave = () => {
        console.log("--> onSave")
    }
    onNew = () => {
        console.log("--> onNew")
    }

    render () {
        let buttons = null
        buttons = <>
        <SlyServiceItem direction="horizontal">
            {/* <SlyLinkButton extraStyle="push" text="reset" funcHandle={this.onReset} /> */}
            {/* <SlyLinkButton extraStyle="push" text="save" funcHandle={this.onSave} />
            <SlyLinkButton extraStyle="push" text="new" funcHandle={this.onReset} /> */}
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="reload"
                funcHandle={this.onReset} />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="okay"
                funcHandle={this.onSave} />
            <SlyIcon size_x={40} size_y={40} fill="#673ab7" padding="0" direction="embedded" pattern="plus"
                funcHandle={this.onReset} />
        </SlyServiceItem>
        </>
        return (
            <div className="sly-parsing-words-control-panel-container">
                {/* <h1>[SlyParsingWordsControlPanel]</h1> */}
                <div className="sly-parsing-words-control-panel-wrapper">
                    {/* <h1>SlyParsingWordsControlPanel</h1> */}
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyParsingWordsControlPanel
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyParsingWordsControlPanel))
