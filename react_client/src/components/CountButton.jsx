import React from 'react'
import { connect } from 'react-redux'
import { addAction, reduceAction } from '../flux-redux/actions'

// export default 
function CountButton (props) {
    const addTen = () => {
        props.sendAdd(10)
    }
    const reduceTwo = () => {
        props.sendReduce(2)
    }
    return (
        <div>
            <button onClick={addTen}>+10</button>
            <button onClick={reduceTwo}>-2</button>
        </div>
    )
}

//
const mapDispatchToProps = dispatch => {
    return {
        sendAdd: (num) => {
            dispatch(addAction(num))
        },
        sendReduce: (num) => {
            dispatch(reduceAction(num))
        }
    }
}

export default connect(null, mapDispatchToProps)(CountButton)
