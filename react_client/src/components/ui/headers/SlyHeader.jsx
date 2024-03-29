import React, { Component } from 'react'
import './SlyHeader.css'
//
// import SlyNotice from './SlyNotice'
import SlyCompLeft from './SlyCompLeft'
import SlyCompRight from './SlyCompRight'
//
import { connect } from 'react-redux'
import { setContainerDimensionsAction } from '../../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyHeader extends Component {

    constructor () {
        super()
        //
        this.myRef = React.createRef()
    }

    componentDidMount () {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions)
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () => {
        let containerHeight = 0
        if (this.myRef.current!==null) {
            containerHeight = this.myRef.current.clientHeight
        }

        const { setContainerDimensions } = this.props
        setContainerDimensions({
            tag: "headerHeight",
            dimensions: containerHeight + 3,
        })
    }

    render () {
        const {containers } = this.props
        const { headerContainer, headerWrapper } = containers

        const headerContainerStyle = {
            backgroundColor: headerContainer,
        }
        const headerWrapperStyle = {
            backgroundColor: headerWrapper,
        }
        
        return (
            <div ref={this.myRef} className="sly-header-container" style={headerContainerStyle} >
                <div className="sly-header-wrapper" style={headerWrapperStyle} >
                    {/* <SlyNotice /> */}
                    <div className="comp-all">
                        <SlyCompLeft />
                        <SlyCompRight />
                    </div>
                    {/* <SlyNotice /> */}
                </div>
            </div>
        )
    }
}

// export default SlyHeader
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyHeader))