import C from '../constants'

const initialState = {
    count: 0
}

export const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.ADD_NUM:
            return {
                ...state,
                count: state.count + action.payload.num
            }
        case C.REDUCE_NUM:
            return {
                ...state,
                count: state.count - action.payload.num
            }
        default:
            return state
    }
}