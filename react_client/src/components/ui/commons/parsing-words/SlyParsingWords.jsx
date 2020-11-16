import React, { Component } from 'react'
import './SlyParsingWords.css'
//
import SlyServiceManagers from '../../layouts/SlyServiceManagers'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../../flux-redux/actions'


class SlyParsingWords extends Component {

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
        // const { fyrb_terms } = this.props.nativeData
        
        let buttons = null
        buttons = <>
        <SlyServiceManagers />
        {/* {JSON.stringify(fyrb_terms)} */}
        </>

        return (
            <div className="sly-parsing-words-container">
                {/* <h1>[SlyParsingWords]</h1> */}
                <div className="sly-parsing-words-wrapper">
                    {/* <h1>[SlyParsingWords]</h1> */}
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyParsingWords
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyParsingWords))