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
import { setServiceItemAction  } from '../../../flux-redux/actions'


class SlyServiceModules extends Component {

    // constructor () {
    //     super()
    // }

    onSlyServiceItem1 = () => {
        console.log("--onSlyServiceItem1")
        this.modifyServiceItem("SlyServiceItem1")
    }
    onSlyServiceItem2 = () => {
        console.log("--onSlyServiceItem2")
        this.modifyServiceItem("SlyServiceItem2")
    }
    onSlyServiceItem3 = () => {
        console.log("--onSlyServiceItem3")
        this.modifyServiceItem("SlyServiceItem3")
    }
    onSlyServiceItem4 = () => {
        console.log("--onSlyServiceItem4")
        this.modifyServiceItem("SlyServiceItem4")
    }
    onSlyServiceItem5 = () => {
        console.log("--onSlyServiceItem5")
        this.modifyServiceItem("SlyServiceItem5")
    }

    modifyServiceItem = (tag) => {
        const { setServiceItem } = this.props
        setServiceItem(tag)
    }

    render () {
        let buttons = null
        buttons = <>
        <SlyServiceItem>
            <SlyLinkButton extraStyle="push" text="Naming Conventions" funcHandle={this.onSlyServiceItem1} />
            <SlyLinkButton extraStyle="push" text="Common Programs" funcHandle={this.onSlyServiceItem2} />
            <SlyLinkButton extraStyle="push" text="Common Exceptions" funcHandle={this.onSlyServiceItem3} />
            <SlyLinkButton extraStyle="push" text="SlyServiceItem4" funcHandle={this.onSlyServiceItem4} />
            <SlyLinkButton extraStyle="push" text="SlyServiceItem5" funcHandle={this.onSlyServiceItem5} />
        </SlyServiceItem>
        </>
        return (
            <div className="sly-service-modules-container">
                {/* <h1>[SlyServiceModules]</h1> */}
                <div className="sly-service-modules-wrapper">
                    <h1>[SlyServiceModules]</h1>
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
        setServiceItem: (serviceItem) => {
            dispatch(setServiceItemAction(serviceItem))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceModules))
