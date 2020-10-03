import C from '../constants'
import fetch from 'isomorphic-fetch'
// import axios from 'axios'

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
        const data = {
            email: "user2@gmail.com",
            password: "Umph2014$@",
        }
        let data_body = Object.keys(data).map(
            key => encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&')
        console.log(data_body)
        // let formData = new FormData()
        // formData.append('email', 'user2@gmail.com')
        // formData.append('password', 'Umph2014$@')
        // fetch(`http://api.open-notify.org/astros.json`
        // fetch('api/auth/login'
        fetch('/api/auth/login', {
                    method: 'POST',
                    mode: "no-cors",
                    headers: {
                        // 'Content-Type': "application/x-www-form-urlencoded",
                        'Content-Type': "application/json",
                    },
                    // body: data_body,
                    body: JSON.stringify(data),
                    // body: formData,
                }
            )
            .then(async response => {
                console.log("response: ",response)
                return response
            })
            .then(response => {
                if (response.error) {
                    throw(response.error)
                }
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_SUCCESS, astronauts: response})
                return response
            })
            .catch(error => {
                console.log(error)
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_FAUILE, error: JSON.stringify(error)})
            })
            
    }
}