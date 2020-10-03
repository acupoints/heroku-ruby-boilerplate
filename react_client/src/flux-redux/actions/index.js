import C from '../constants'
import fetch from 'isomorphic-fetch'

export const addAction = (num) => {
    return {
        type: C.ADD_NUM,
        payload: {
            num
        }
    }
}

export const reduceAction = (num) => {
    return {
        type: C.REDUCE_NUM,
        payload: {
            num
        }
    }
}

//
export const fetchAstronautsAction = () => {
    return (dispatch) => {
        dispatch({type: C.ADD_ASTRONAUTS_FETCH_START})
        fetch(`http://api.open-notify.org/astros.json`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw(response.error)
                }
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_SUCCESS, astronauts: response.people})
                return response
            })
            .catch(error => {
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_FAUILE, error: error})
            })
    }
}