import React, { Component } from 'react'
import './SlyMainComponents.css'
//

//
import { connect } from 'react-redux'
import { setContainerDimensionsAction } from '../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyMainComponents extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const {containers } = this.props
        const { headerHeight, bannerHeight } = containers

        const style = {
            paddingTop: headerHeight,
            paddingBottom: bannerHeight,
        }
        
        return (
            <div ref={this.myRef} className="sly-main-components-container" style={style} >
                {/* <h1>[SlyMainComponents]</h1> */}
                {/* <div className="sly-main-components-wrapper">
                    <h1>[SlyMainComponents]</h1>
                </div> */}
                {this.props.children}
            </div>
        )
    }
}

// export default SlyMainComponents
//
const mapStateToProps = state => {
    return state.settingsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        setContainerDimensions: (container) => {
            dispatch(setContainerDimensionsAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMainComponents))