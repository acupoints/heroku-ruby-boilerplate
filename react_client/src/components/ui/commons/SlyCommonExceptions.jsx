import React, { Component } from 'react'
import './SlyCommonExceptions.css'
//

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { setContainerDimensionsAction } from '../../../flux-redux/actions'


class SlyCommonExceptions extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { nativeData } = this.props
        const { fyrb_exceptions } = nativeData
        
        let buttons = null
        buttons = <>
        {JSON.stringify(fyrb_exceptions)}
        </>

        return (
            <div className="sly-common-exceptions-container">
                {/* <h1>[SlyCommonExceptions]</h1> */}
                <div className="sly-common-exceptions-wrapper">
                    <h1>[SlyCommonExceptions]</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyCommonExceptions
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
        // setContainerDimensions: (container) => {
        //     dispatch(setContainerDimensionsAction(container))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonExceptions))