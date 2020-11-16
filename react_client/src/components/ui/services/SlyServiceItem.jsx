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
        const { direction } = this.props
        let style = {}
        if (direction === "horizontal") {
            style = {
                "flex": 1,
                "display": "flex",
                "flexDirection": "row",
            }
        } else if (direction === "vertical") {
            style = {
                "flex": 1,
                "display": "flex",
                "flexDirection": "column",
            }
        }
        
        return (
            <div className="sly-service-item-container">
                {/* <h1>[SlyServiceItem]</h1> */}
                <div className="sly-service-item-wrapper" style={style}>
                    {/* <h1>[SlyServiceItem]</h1> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//
SlyServiceItem.propTypes = {
    direction: PropTypes.string.isRequired,
}

SlyServiceItem.defaultProps = {
    direction: "vertical", // horizontal/vertical
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
