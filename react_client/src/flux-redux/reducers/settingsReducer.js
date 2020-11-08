import C from '../constants'

const initialState = {
    containers: {
        bannerHeight: 0,
        noticeHeight: 0,
        headerHeight: 0,
        // headerContainer: "#607D8B",
        headerContainer: "#FAFAFB",
        // headerWrapper: "#F3E5F5",
        headerWrapper: "#FAFAFB",
        serviceItem: "",
    }
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.SETTINGS_SET_CONTAINER_HEIGHT:
            return {
                ...state,
                containers: {
                    ...state.containers,
                    [action.container.tag]: action.container.height
                },
            }
        case C.SETTINGS_SET_CONTAINER_THEME_COLOR:
            return {
                ...state,
                containers: {
                    ...state.containers,
                    [action.container.tag]: action.container.color
                },
            }
        case C.SETTINGS_SET_SERVICE_ITEM:
            return {
                ...state,
                serviceItem: action.payload.serviceItem,
            }
        default:
            return state
    }
}