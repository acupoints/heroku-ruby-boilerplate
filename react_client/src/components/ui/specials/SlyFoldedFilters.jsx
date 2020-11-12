import React, { Component } from 'react'
import './SlyFoldedFilters.css'
//
import PropTypes from 'prop-types'

//

class SlyFoldedFilters extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { text } = this.props
        return (
            <div className="sly-folded-filters-container">
                {/* <h1>[SlyFoldedFilters]</h1> */}
                <div className="sly-folded-filters-wrapper">
                    <h1>[SlyFoldedFilters]</h1>
                </div>
                {text}
            </div>
        )
    }
}

//
SlyFoldedFilters.propTypes = {
    text: PropTypes.string.isRequired,
}

SlyFoldedFilters.defaultProps = {
    text: "",
}

export default SlyFoldedFilters
