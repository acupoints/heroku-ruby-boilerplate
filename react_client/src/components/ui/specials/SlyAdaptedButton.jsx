import React, { Component } from 'react'
import './SlyAdaptedButton.css'
//
import PropTypes from 'prop-types'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../flux-redux/actions'

//
import { Link } from 'react-router-dom'

class SlyAdaptedButton extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text,linkAddress,funcHandle,extraStyle } = this.props
        //
        let buttons = null
        if (linkAddress) {
            buttons = <>
                <Link to={linkAddress} className={"sly-adapted-button "+extraStyle}>{text}</Link>
            </>
        } else {
            buttons = <>
                <button onClick={funcHandle} className={"sly-adapted-button "+extraStyle}>{text}</button>
            </>
        }

        return (
            <div className="sly-adapted-button-container">
                {/* <h1>[SlyAdaptedButton]</h1> */}
                <div className="sly-adapted-button-wrapper">
                    {/* <h1>[SlyAdaptedButton]</h1> */}
                    {buttons}
                </div>
            </div>
        )
    }
}

//
SlyAdaptedButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
    funcHandle: PropTypes.func.isRequired,
    extraStyle: PropTypes.string.isRequired,
}

SlyAdaptedButton.defaultProps = {
    text: "Adapted Button",
    linkAddress: undefined,
    funcHandle: f => f,
    extraStyle: "", //push
}

// export default SlyAdaptedButton
//
const mapStateToProps = state => {
    // return state.astronautsReducer
    return {
        ...state.astronautsReducer,
        ...state.settingsReducer,
    }
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
        setSelectedItem: (container) => {
            dispatch(setSelectedItemAction(container))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyAdaptedButton))