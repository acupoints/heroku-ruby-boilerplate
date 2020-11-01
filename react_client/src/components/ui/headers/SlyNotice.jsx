import React, { Component } from 'react'
import './SlyNotice.css'
//

//
import { connect } from 'react-redux'
import { setContainerHeightAction } from '../../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyNotice extends Component {

    constructor () {
        super()
        //
        this.myRef = React.createRef()
    }

    componentDidMount() {
        let containerHeight = 0
        // console.log("--> SlyNotice:", this.myRef.current)
        if (this.myRef.current!==null) {
            containerHeight = this.myRef.current.clientHeight
        }

        const { setContainerHeight } = this.props
        setContainerHeight({
            tag: "noticeHeight",
            height: containerHeight,
        })
    }

    render () {
        return (
            <div ref={this.myRef} className="sly-notice-container">
                <h1>[SlyNotice]</h1>
            </div>
        )
    }
}

// export default SlyNotice
//
const mapStateToProps = state => {
    return state.settingsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        setContainerHeight: (container) => {
            dispatch(setContainerHeightAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyNotice))