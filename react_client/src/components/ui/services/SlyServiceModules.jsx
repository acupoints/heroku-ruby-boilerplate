import React, { Component } from 'react'
import './SlyServiceModules.css'
//
// import SlyMenuItem from '../menus/SlyMenuItem'
import SlyLinkButton from '../menus/SlyLinkButton'
import SlyServiceItem from './SlyServiceItem'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../flux-redux/actions'


class SlyServiceModules extends Component {

    // constructor () {
    //     super()
    // }

    modifySelectedItem = (tag) => {
        return () => {
            const { setSelectedItem } = this.props
            console.log(`--> ${tag}`)
            setSelectedItem({
                tag: "serviceItem",
                selected: tag,
                // target: "parsing_words",
            })
        }
    }

    render () {
        let buttons = null
        buttons = <>
        <SlyServiceItem>
            <SlyLinkButton extraStyle="push" text="SlyCommonPrograms" funcHandle={this.modifySelectedItem("SlyCommonPrograms")} />
            <SlyLinkButton extraStyle="push" text="SlyCommonExceptions" funcHandle={this.modifySelectedItem("SlyCommonExceptions")} />
            <SlyLinkButton extraStyle="push" text="SlyCommonInterfaces" funcHandle={this.modifySelectedItem("SlyCommonInterfaces")} />
            <SlyLinkButton extraStyle="push" text="SlyParsingWords" funcHandle={this.modifySelectedItem("SlyParsingWords")} />
            <SlyLinkButton extraStyle="push" text="SlyNamingConventions" funcHandle={this.modifySelectedItem("SlyNamingConventions")} />
            <SlyLinkButton extraStyle="push" text="SlyBatchGenerators" funcHandle={this.modifySelectedItem("SlyBatchGenerators")} />
            <SlyLinkButton extraStyle="push" text="SlyCompareCharacters" funcHandle={this.modifySelectedItem("SlyCompareCharacters")} />
        </SlyServiceItem>
        </>
        return (
            <div className="sly-service-modules-container">
                {/* <h1>[SlyServiceModules]</h1> */}
                <div className="sly-service-modules-wrapper">
                    <h1>Utilities</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyServiceModules
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceModules))
