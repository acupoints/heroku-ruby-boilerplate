import React from 'react'
import { connect } from 'react-redux'

// export default 
function CountNum (props) {
    return (
        <div>{props.count}</div>
    )
}

//
const mapStateToProps = state => {
    return state.spinnerReducer
}

export default connect(mapStateToProps)(CountNum)
