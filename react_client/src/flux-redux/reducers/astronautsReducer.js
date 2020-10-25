import C from '../constants'

const initialState = {
    astronauts: null,
    pending: false,
    error: null,
    menus: {
        "menu-tools": false,
        "menu-profiles": false,
    },
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
        case C.USER_SIGNOUT:
            return {
                ...state,
                astronauts: null,
                pending: false,
                error: null,
            }
        case C.ADD_MENU:
            return {
                ...state,
                menus: {
                    ...state.menus,
                    [action.menu.tag]: action.menu.visible
                },
            }
        case C.REMOVE_MENU:
            let menus_new = state.menus
            delete menus_new[action.menu.tag]
            return {
                ...state,
                menus: {
                    ...menus_new,
                },
            }
        case C.CLEAR_MENU:
            return {
                ...state,
                menus: {
                    "menu-tools": false,
                    "menu-profiles": false,
                },
            }
        default:
            return state
    }
}