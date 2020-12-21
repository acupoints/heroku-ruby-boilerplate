import React, { Component } from 'react'
import './SlyCommonInterfaces.css'
//

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { setContainerDimensionsAction } from '../../../flux-redux/actions'


class SlyCommonInterfaces extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { nativeData } = this.props
        const { fyrb_interfaces } = nativeData
        
        let buttons = null
        buttons = <>
        {JSON.stringify(fyrb_interfaces)}
        </>

        return (
            <div className="sly-common-interfaces-container">
                {/* <h1>[SlyCommonInterfaces]</h1> */}
                <div className="sly-common-interfaces-wrapper">
                    <h1>[SlyCommonInterfaces]</h1>
                    <h4>编程接口或界面结点，如WIN32API、进入设置环境变量界面等。。。</h4>
                    {buttons}
                </div>
            </div>
        )
    }
}

// export default SlyCommonInterfaces
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyCommonInterfaces))