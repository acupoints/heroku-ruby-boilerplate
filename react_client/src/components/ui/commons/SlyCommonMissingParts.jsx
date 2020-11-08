import React, { Component } from 'react'
import './SlyCommonMissingParts.css'
//
import SlyCommonPrograms from './SlyCommonPrograms'
import SlyCommonExceptions from './SlyCommonExceptions'
import SlyNamingConventions from '../utilities/SlyNamingConventions'
import SlyServiceModules from '../services/SlyServiceModules'

//
import { connect } from 'react-redux'
import { setContainerHeightAction } from '../../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyCommonMissingParts extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const {containers } = this.props
        const { headerHeight, bannerHeight } = containers

        const styleCompLeft = {
            // paddingTop: headerHeight,
            // paddingBottom: bannerHeight,
            top: headerHeight,
            // height: `calc(100vh - ${headerHeight + bannerHeight + 48}px)`,
            height: `calc(100vh - ${headerHeight + bannerHeight}px)`,
        }
        const styleCompRight = {
            // paddingTop: headerHeight,
            // paddingBottom: bannerHeight,
            marginBottom: bannerHeight,
            // top: headerHeight,
            // height: `calc(100vh - ${headerHeight + bannerHeight + 48}px)`,
            // height: `calc(100vh - ${headerHeight + bannerHeight}px)`,
        }
        //
        const { serviceItem } = this.props

        let buttons = null
        if (serviceItem === "SlyServiceItem1") {
            buttons = <>
            <h3>SlyServiceItem1</h3>
            <SlyNamingConventions />
            </>
        } else if (serviceItem === "SlyServiceItem2") {
            buttons = <>
            <h3>SlyServiceItem2</h3>
            <SlyCommonPrograms />
            </>
        } else if (serviceItem === "SlyServiceItem3") {
            buttons = <>
            <h3>SlyServiceItem3</h3>
            <SlyCommonExceptions />
            </>
        } else if (serviceItem === "SlyServiceItem4") {
            buttons = <>
            <h3>SlyServiceItem4</h3>
            </>
        } else if (serviceItem === "SlyServiceItem5") {
            buttons = <>
            <h3>SlyServiceItem5</h3>
            </>
        }

        return (
            <div className="sly-common-missing-parts-container">
                {/* <h1>[SlyCommonMissingParts]</h1> */}
                <div className="sly-common-missing-parts-wrapper">
                    {/* <h1>[SlyCommonMissingParts]</h1> */}
                    <div className="sly-common-missing-parts-comp-left" style={styleCompLeft} >
                        <SlyServiceModules />
                    </div>
                    <div className="sly-common-missing-parts-comp-right" style={styleCompRight} >
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
}

// export default SlyCommonMissingParts
//
const mapStateToProps = state => {
    // return state.settingsReducer
    return {
        ...state.astronautsReducer,
        ...state.settingsReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setContainerHeight: (container) => {
            dispatch(setContainerHeightAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonMissingParts))