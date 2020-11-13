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
import { setServiceItemAction  } from '../../../flux-redux/actions'


class SlyServiceAlternatives extends Component {

    // constructor () {
    //     super()
    // }

    modifyServiceItem = (tag) => {
        return () => {
            const { setServiceItem } = this.props
            console.log(`--> ${tag}`)
            setServiceItem(tag)
        }
    }

    render () {
        let buttons = null
        buttons = <>
        <SlyServiceItem>
            <SlyLinkButton extraStyle="push" text="SlyColorExtractors" funcHandle={this.modifyServiceItem("SlyColorExtractors")} />
            <SlyLinkButton extraStyle="push" text="SlyThreadWorkers" funcHandle={this.modifyServiceItem("SlyThreadWorkers")} />
            <SlyLinkButton extraStyle="push" text="SlyScheduledTasks" funcHandle={this.modifyServiceItem("SlyScheduledTasks")} />
            <SlyLinkButton extraStyle="push" text="SlyIconModifiers" funcHandle={this.modifyServiceItem("SlyIconModifiers")} />
            <SlyLinkButton extraStyle="push" text="SlyShellMappers" funcHandle={this.modifyServiceItem("SlyShellMappers")} />
            <SlyLinkButton extraStyle="push" text="SlyCodeConverters" funcHandle={this.modifyServiceItem("SlyCodeConverters")} />
            <SlyLinkButton extraStyle="push" text="SlyVectorEditors" funcHandle={this.modifyServiceItem("SlyVectorEditors")} />
            <SlyLinkButton extraStyle="push" text="SlyChartGenerators" funcHandle={this.modifyServiceItem("SlyChartGenerators")} />
            <SlyLinkButton extraStyle="push" text="SlyAtomicRenderers" funcHandle={this.modifyServiceItem("SlyAtomicRenderers")} />
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
        setServiceItem: (serviceItem) => {
            dispatch(setServiceItemAction(serviceItem))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceAlternatives))
