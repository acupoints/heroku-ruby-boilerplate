import React, { Component } from 'react'
import './SlyServiceAlternatives.css'
//
// import SlyMenuItem from '../menus/SlyMenuItem'
import SlyLinkButton from '../menus/SlyLinkButton'
import SlyServiceItem from './SlyServiceItem'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../flux-redux/actions'


class SlyServiceAlternatives extends Component {

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
            <SlyLinkButton extraStyle="push" text="SlyColorExtractors" funcHandle={this.modifySelectedItem("SlyColorExtractors")} />
            <SlyLinkButton extraStyle="push" text="SlyThreadWorkers" funcHandle={this.modifySelectedItem("SlyThreadWorkers")} />
            <SlyLinkButton extraStyle="push" text="SlyScheduledTasks" funcHandle={this.modifySelectedItem("SlyScheduledTasks")} />
            <SlyLinkButton extraStyle="push" text="SlyIconModifiers" funcHandle={this.modifySelectedItem("SlyIconModifiers")} />
            <SlyLinkButton extraStyle="push" text="SlyShellMappers" funcHandle={this.modifySelectedItem("SlyShellMappers")} />
            <SlyLinkButton extraStyle="push" text="SlyCodeConverters" funcHandle={this.modifySelectedItem("SlyCodeConverters")} />
            <SlyLinkButton extraStyle="push" text="SlyVectorEditors" funcHandle={this.modifySelectedItem("SlyVectorEditors")} />
            <SlyLinkButton extraStyle="push" text="SlyChartGenerators" funcHandle={this.modifySelectedItem("SlyChartGenerators")} />
            <SlyLinkButton extraStyle="push" text="SlyAtomicRenderers" funcHandle={this.modifySelectedItem("SlyAtomicRenderers")} />
            <SlyLinkButton extraStyle="push" text="SlySymbolSheets" funcHandle={this.modifySelectedItem("SlySymbolSheets")} />
            <SlyLinkButton extraStyle="push" text="SlyOfficialLinks" funcHandle={this.modifySelectedItem("SlyOfficialLinks")} />
        </SlyServiceItem>
        </>
        return (
            <div className="sly-service-alternatives-container">
                {/* <h1>[SlyServiceAlternatives]</h1> */}
                <div className="sly-service-alternatives-wrapper">
                    <h1>Alternatives</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyServiceAlternatives
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceAlternatives))
