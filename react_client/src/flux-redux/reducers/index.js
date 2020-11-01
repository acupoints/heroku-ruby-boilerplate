import { combineReducers } from 'redux'
import { spinnerReducer } from './spinnerReducer'
import { astronautsReducer } from './astronautsReducer'
import { settingsReducer } from './settingsReducer'

export const rootReducer = combineReducers({
    spinnerReducer,
    astronautsReducer,
    settingsReducer,
})
