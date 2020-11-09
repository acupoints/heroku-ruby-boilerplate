import React, { Component } from 'react'
import './SlyCommonMissingParts.css'
//
import SlyServiceModules from '../services/SlyServiceModules'
import SlyNamingConventions from '../utilities/SlyNamingConventions'
import SlyCommonPrograms from './SlyCommonPrograms'
import SlyCommonExceptions from './SlyCommonExceptions'
import SlyCommonInterfaces from './SlyCommonInterfaces'
import SlyCompareCharacters from './SlyCompareCharacters'
import SlyParsingWords from './SlyParsingWords'
import SlyBatchGenerators from './SlyBatchGenerators'

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
        if (serviceItem === "SlyNamingConventions") {
            buttons = <>
            <SlyNamingConventions />
            </>
        } else if (serviceItem === "SlyCommonPrograms") {
            buttons = <>
            <SlyCommonPrograms />
            </>
        } else if (serviceItem === "SlyCommonExceptions") {
            buttons = <>
            <SlyCommonExceptions />
            </>
        } else if (serviceItem === "SlyCommonInterfaces") {
            buttons = <>
            <SlyCommonInterfaces />
            </>
        } else if (serviceItem === "SlyCompareCharacters") {
            buttons = <>
            <SlyCompareCharacters />
            </>
        } else if (serviceItem === "SlyParsingWords") {
            buttons = <>
            <SlyParsingWords />
            </>
        } else if (serviceItem === "SlyBatchGenerators") {
            buttons = <>
            <SlyBatchGenerators />
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