import C from '../constants'

const initialState = {
    astronauts: [],
    pending: false,
    error: null,
}

export const astronautsReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.ADD_ASTRONAUTS_FETCH_START:
            return {
                ...state,
                pending: true,
            }
        case C.ADD_ASTRONAUTS_FETCH_SUCCESS:
            return {
                ...state,
                astronauts: action.astronauts,
                pending: false,
            }
        case C.ADD_ASTRONAUTS_FETCH_FAUILE:
            return {
                ...state,
                astronauts: action.astronauts,
                pending: false,
                error: action.error,
            }
        default:
            return state
    }
}