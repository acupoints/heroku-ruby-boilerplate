import React, { Component } from 'react'
import './SlyMenuItem.css'
//
import PropTypes from 'prop-types'
// import SlyButton from './SlyButton'
// import SlyIcon from './SlyIcon'
// import SlyLinkButton from './SlyLinkButton'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction } from '../../flux-redux/actions'

class SlyMenuItem extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        // const { isVisible } = this.props
        // let buttons = null
        // if (isVisible) {
        //     buttons = <>
        //         <div className="sly-menu-item-container">
        //             {/* <h1>[SlyMenuItem]</h1> */}
        //             {this.props.children}
        //         </div>
        //     </>
        // } else {
        //     buttons = <></>
        // }
        return (
            // {buttons}
            <div className="sly-menu-item-container">
                {/* <h1>[SlyMenuItem]</h1> */}
                {this.props.children}
            </div>
        )
    }
}

//
SlyMenuItem.propTypes = {
    isVisible: PropTypes.bool.isRequired,
}

SlyMenuItem.defaultProps = {
    isVisible: false,
}

// export default SlyMenuItem
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        userSignout: () => {
            dispatch(userSignoutAction())
        },
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SlyMenuItem)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyMenuItem))