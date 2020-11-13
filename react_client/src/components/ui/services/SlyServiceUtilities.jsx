import React, { Component } from 'react'
import './SlyServiceUtilities.css'
//
// import SlyMenuItem from '../menus/SlyMenuItem'
import SlyLinkButton from '../menus/SlyLinkButton'
import SlyServiceItem from './SlyServiceItem'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { setServiceItemAction  } from '../../../flux-redux/actions'


class SlyServiceUtilities extends Component {

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
            <SlyLinkButton extraStyle="push" text="SlyCommonPrograms" funcHandle={this.modifyServiceItem("SlyCommonPrograms")} />
            <SlyLinkButton extraStyle="push" text="SlyCommonExceptions" funcHandle={this.modifyServiceItem("SlyCommonExceptions")} />
            <SlyLinkButton extraStyle="push" text="SlyCommonInterfaces" funcHandle={this.modifyServiceItem("SlyCommonInterfaces")} />
            <SlyLinkButton extraStyle="push" text="SlyParsingWords" funcHandle={this.modifyServiceItem("SlyParsingWords")} />
            <SlyLinkButton extraStyle="push" text="SlyNamingConventions" funcHandle={this.modifyServiceItem("SlyNamingConventions")} />
            <SlyLinkButton extraStyle="push" text="SlyBatchGenerators" funcHandle={this.modifyServiceItem("SlyBatchGenerators")} />
            <SlyLinkButton extraStyle="push" text="SlyCompareCharacters" funcHandle={this.modifyServiceItem("SlyCompareCharacters")} />
        </SlyServiceItem>
        </>
        return (
            <div className="sly-service-utilities-container">
                {/* <h1>[SlyServiceUtilities]</h1> */}
                <div className="sly-service-utilities-wrapper">
                    <h1>Utilities</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyServiceUtilities
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceUtilities))
