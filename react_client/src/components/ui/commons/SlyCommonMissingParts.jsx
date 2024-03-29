import React, { Component } from 'react'
import './SlyCommonMissingParts.css'
//
// import SlyServiceModules from '../services/SlyServiceModules'
import SlyServiceUtilities from '../services/SlyServiceUtilities'
import SlyServiceAlternatives from '../services/SlyServiceAlternatives'
// Utilities
import SlyCommonPrograms from './SlyCommonPrograms'
import SlyCommonExceptions from './SlyCommonExceptions'
import SlyCommonInterfaces from './SlyCommonInterfaces'
import SlyParsingWords from './parsing-words/SlyParsingWords'
import SlyNamingConventions from '../utilities/SlyNamingConventions'
import SlyBatchGenerators from './SlyBatchGenerators'
import SlyCompareCharacters from './SlyCompareCharacters'
// Alternatives
import SlyColorExtractors from './SlyColorExtractors'
import SlyThreadWorkers from './SlyThreadWorkers'
import SlyScheduledTasks from './SlyScheduledTasks'
import SlyIconModifiers from './SlyIconModifiers'
import SlyShellMappers from './SlyShellMappers'
import SlyCodeConverters from './SlyCodeConverters'
import SlyVectorEditors from './SlyVectorEditors'
import SlyChartGenerators from './SlyChartGenerators'
import SlyAtomicRenderers from './SlyAtomicRenderers'
import SlySymbolSheets from './SlySymbolSheets'
import SlyOfficialLinks from './SlyOfficialLinks'

import SlyCommonEcho from './SlyCommonEcho'

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setContainerDimensionsAction } from '../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../flux-redux/actions'

class SlyCommonMissingParts extends Component {

    // constructor () {
    //     super()
    // }

    componentWillUnmount () {
        console.log("--卸载侧边栏")
        // this.modifySelectedItem("")
    }

    modifySelectedItem = (tag) => {
        // return () => {
        // }
        const { setSelectedItem } = this.props
        console.log(`--> ${tag}`)
        setSelectedItem({
            tag: "serviceItem",
            selected: tag,
            // target: "parsing_words",
        })
    }

    render () {
        const {containers } = this.props
        const { headerHeight, bannerHeight } = containers

        const styleCompLeft = {
            top: headerHeight,
            height: `calc(100vh - ${headerHeight + bannerHeight}px)`,
        }
        const styleCompRight = {
            top: headerHeight,
            height: `calc(100vh - ${headerHeight + bannerHeight}px)`,
        }
        //
        const { serviceItem } = this.props.containers

        let buttons = null
        // Utilities
        if (serviceItem === "SlyCommonPrograms") {
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
        } else if (serviceItem === "SlyParsingWords") {
            buttons = <>
            <SlyParsingWords />
            </>
        } else if (serviceItem === "SlyNamingConventions") {
            buttons = <>
            <SlyNamingConventions />
            </>
        } else if (serviceItem === "SlyBatchGenerators") {
            buttons = <>
            <SlyBatchGenerators />
            </>
        } else if (serviceItem === "SlyCompareCharacters") {
            buttons = <>
            <SlyCompareCharacters />
            </>
        } 
        // Alternatives
        else if (serviceItem === "SlyColorExtractors") {
            buttons = <>
            <SlyColorExtractors />
            </>
        } else if (serviceItem === "SlyThreadWorkers") {
            buttons = <>
            <SlyThreadWorkers />
            </>
        } else if (serviceItem === "SlyScheduledTasks") {
            buttons = <>
            <SlyScheduledTasks />
            </>
        } else if (serviceItem === "SlyIconModifiers") {
            buttons = <>
            <SlyIconModifiers />
            </>
        } else if (serviceItem === "SlyShellMappers") {
            buttons = <>
            <SlyShellMappers />
            </>
        } else if (serviceItem === "SlyCodeConverters") {
            buttons = <>
            <SlyCodeConverters />
            </>
        } else if (serviceItem === "SlyVectorEditors") {
            buttons = <>
            <SlyVectorEditors />
            </>
        } else if (serviceItem === "SlyChartGenerators") {
            buttons = <>
            <SlyChartGenerators />
            </>
        } else if (serviceItem === "SlyAtomicRenderers") {
            buttons = <>
            <SlyAtomicRenderers />
            </>
        } else if (serviceItem === "SlySymbolSheets") {
            buttons = <>
            <SlySymbolSheets />
            </>
        } else if (serviceItem === "SlyOfficialLinks") {
            buttons = <>
            <SlyOfficialLinks />
            </>
        } else {
            buttons = <>
            <SlyCommonEcho />
            </>
        }

        return (
            <div className="sly-common-missing-parts-container">
                {/* <h1>[SlyCommonMissingParts]</h1> */}
                <div className="sly-common-missing-parts-wrapper">
                    {/* <h1>[SlyCommonMissingParts]</h1> */}
                    <div className="sly-common-missing-parts-comp-left" style={styleCompLeft} >
                        {/* <SlyServiceModules /> */}
                        <SlyServiceUtilities />
                        <SlyServiceAlternatives />
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
        setContainerDimensions: (container) => {
            dispatch(setContainerDimensionsAction(container))
        },
        setSelectedItem: (container) => {
            dispatch(setSelectedItemAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonMissingParts))