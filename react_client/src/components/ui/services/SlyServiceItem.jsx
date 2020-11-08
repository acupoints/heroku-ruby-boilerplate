import React, { Component } from 'react'
import './SlyServiceItem.css'
//
import PropTypes from 'prop-types'

//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'


class SlyServiceItem extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        return (
            <div className="sly-service-item-container">
                {/* <h1>[SlyServiceItem]</h1> */}
                <div className="sly-service-item-wrapper">
                    {/* <h1>[SlyServiceItem]</h1> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//
SlyServiceItem.propTypes = {
    isVisible: PropTypes.bool.isRequired,
}

SlyServiceItem.defaultProps = {
    isVisible: false,
}

// export default SlyServiceItem
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        userSignout: () => {
            dispatch(userSignoutAction())
        },
        addMenu: (menu) => {
            dispatch(addMenuAction(menu))
        },
        removeMenu: (menu) => {
            dispatch(removeMenuAction(menu))
        },
        clearMenu: () => {
            dispatch(clearMenuAction())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyServiceItem))
