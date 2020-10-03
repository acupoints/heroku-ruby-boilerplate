import { combineReducers } from 'redux'
import { spinnerReducer } from './spinnerReducer'
import { astronautsReducer } from './astronautsReducer'

export const rootReducer = combineReducers({
    spinnerReducer,
    astronautsReducer,
})
