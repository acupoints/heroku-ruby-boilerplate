import React, { Component } from 'react'
import './SlyCommonPrograms.css'
//

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { setContainerDimensionsAction } from '../../../flux-redux/actions'


class SlyCommonPrograms extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { nativeData } = this.props
        const { fyrb_programs } = nativeData

        let buttons = null
        buttons = <>
        {JSON.stringify(fyrb_programs)}
        </>

        return (
            <div className="sly-common-programs-container">
                {/* <h1>[SlyCommonPrograms]</h1> */}
                <div className="sly-common-programs-wrapper">
                    <h1>[SlyCommonPrograms]</h1>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyCommonPrograms
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonPrograms))