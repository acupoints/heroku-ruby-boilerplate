import React, { Component } from 'react'
import './SlyCompRight.css'
//
import SlySearch from './SlySearch'
import SlyButton from './SlyButton'
// import SlyIcon from './SlyIcon'
import SlyMenuTools from './SlyMenuTools'
import SlyMenuProfiles from './SlyMenuProfiles'
//
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class SlyCompRight extends Component {

    // constructor () {
    //     super()
    // }

    render () {
        const { astronauts } = this.props
        //
        let buttons = null
        if (astronauts) {
            buttons = <>
                <SlyMenuTools />
                <SlyMenuProfiles />
                {/* <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#9E9E9E" /> */}
                {/* <SlyIcon size_x={75/4} size_y={75/6} rect_cx={10/4} fill="#1B78D6" /> */}
            </>
        } else {
            buttons = <>
                <SlyButton text="Sign in" linkAddress="/users/login" />
                <SlyButton text="Get started" linkAddress="/articles/getting-started" />
            </>
        }
        return (
            <div className="sly-comp-right-container">
                {/* <h1>[SlyCompRight]</h1> */}
                <SlySearch />
                {buttons}
                
            </div>
        )
    }
}

// export default SlyCompRight
//
const mapStateToProps = state => {
    return state.astronautsReducer
}

// export default connect(mapStateToProps)(SlyCompRight)
export default connect(mapStateToProps)(withRouter(SlyCompRight))