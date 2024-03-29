import React, { Component } from 'react'
import './SlyBanner.css'
//
import SlyBulletinBoard from './SlyBulletinBoard'
//
import { connect } from 'react-redux'
import { setContainerDimensionsAction } from '../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyBanner extends Component {

    constructor () {
        super()
        //
        this.myRef = React.createRef()
    }

    // componentDidMount () {
    //     this.refreshContainerHeight()
    // }

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
            tag: "bannerHeight",
            dimensions: containerHeight,
        })
    }

    render () {
        return (
            <div ref={this.myRef} className="sly-banner-container">
                {/* <SlyBulletinBoard /> */}
                <div className="sly-banner-wrapper">
                    <SlyBulletinBoard />
                </div>
            </div>
        )
    }
}

// export default SlyBanner
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyBanner))