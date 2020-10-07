import React, { Component } from 'react'
import './SlyButton.css'
//
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAstronautsAction } from '../../flux-redux/actions'
import { withRouter } from 'react-router-dom'

class SlyButton extends Component {

    // constructor () {
    //     super()
    // }

    handleClick (data) {
        // console.log('-- Call start')
        // console.log("data:",data)
        if (data.email === null || data.password === null) {
            console.log("--> Jump path or perform local operation")
        } else {
            console.log("--> Perform remote calls")
            const data_new = {
                email: data.email.current.value,
                password: data.password.current.value,
            }
            this.props.fetchAstronauts(data_new)
        }
        // console.log('-- Call has been completed')
    }

    render () {
        const { text,data,linkAddress } = this.props
        //
        let button = null
        if (linkAddress) {
            button = <Link to={linkAddress} className="sly-button">{text}</Link>
        } else {
            button = <button onClick={() => this.handleClick(data)} className="sly-button">{text}</button>
        }

        return (
            <div className="sly-button-container">
                {/* <h1>[SlyButton]</h1> */}
                {button}
            </div>
        )
    }
}

//
SlyButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
}

SlyButton.defaultProps = {
    text: "Sign up",
    linkAddress: undefined,
    data: {
        email: null,
        password: null,
    },
}

// export default SlyButton
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAstronauts: (data) => {
            dispatch(fetchAstronautsAction(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SlyButton))
