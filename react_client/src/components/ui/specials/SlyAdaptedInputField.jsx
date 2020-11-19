import React, { Component } from 'react'
import './SlyAdaptedInputField.css'
//
import PropTypes from 'prop-types'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignoutAction, addMenuAction, removeMenuAction, clearMenuAction  } from '../../../flux-redux/actions'
import { setSelectedItemAction  } from '../../../flux-redux/actions'

//

class SlyAdaptedInputField extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        //
        let buttons = null
        buttons = <>
            <input className="sly-adapted-input-field" />
        </>

        return (
            <div className="sly-adapted-input-field-container">
                {/* <h1>[SlyAdaptedInputField]</h1> */}
                <div className="sly-adapted-input-field-wrapper">
                    {/* <h1>[SlyAdaptedInputField]</h1> */}
                    {buttons}
                </div>
            </div>
        )
    }
}

//
SlyAdaptedInputField.propTypes = {
    text: PropTypes.string.isRequired,
    // linkAddress: PropTypes.string.isRequired,
    // funcHandle: PropTypes.func.isRequired,
    // extraStyle: PropTypes.string.isRequired,
}

SlyAdaptedInputField.defaultProps = {
    text: "Adapted Input Field",
    // linkAddress: undefined,
    // funcHandle: f => f,
    // extraStyle: "", //push
}

// export default SlyAdaptedInputField
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyAdaptedInputField))