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
export const fetchAstronautsAction = (data) => {
    return (dispatch) => {
        dispatch({type: C.ADD_ASTRONAUTS_FETCH_START})
        // const data = {
        //     email: "admin@qq.com",
        //     password: "Umph2014$@",
        // }
        // console.log("-- data:",data)
        let data_body = Object.keys(data).map(
            key => encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&')
        // console.log("-- data_body:", data_body)
        // let formData = new FormData()
        // formData.append('email', 'user2@gmail.com')
        // formData.append('password', 'Umph2014$@')

        // fetch(`http://api.open-notify.org/astros.json`
        fetch('/auth/login', {
                    method: 'POST',
                    mode: "cors",
                    credentials: 'include',
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded",
                        // 'Content-Type': "application/json",
                    },
                    body: data_body,
                    // body: JSON.stringify(data),
                    // body: formData,
                }
            )
            .then(response => {
                if (response.ok) {
                    // ok: true
                    // status: 200
                    // statusText: "OK"
                    // console.log('-- ok:', response)
                } else {
                    // ok: false
                    // status: 401
                    // statusText: "Unauthorized"
                    // console.log('-- error:', response)
                    throw(response)
                }
                return response.json()
            })
            .then(response => {
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_SUCCESS, astronauts: response.token})
                return response
            })
            .catch(error => {
                const { status, statusText } = error
                const err = { status, statusText }
                // console.log("-- err:", err)
                dispatch({type: C.ADD_ASTRONAUTS_FETCH_FAUILE, error: JSON.stringify(err)})
            })
            
    }
}

//
export const userSignoutAction = () => {
    return {
        type: C.USER_SIGNOUT,
        payload: {
            
        }
    }
}