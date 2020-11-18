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
    },
    parsing_words: {
        widthTabPage: 0,
        heightControlPanel: 0,
        tagTabPage: "",
        tagControlPanel: "",
        indexCard: -1,
        keywords: "",
        el_old: {},
        el_new: {},
    },
}

export const settingsReducer = (state = initialState, action) => {
    let root_container = null
    switch (action.type) {
        case C.SETTINGS_SET_CONTAINER_DIMENSIONS:
            root_container = action.container.target || "containers"
            return {
                ...state,
                [root_container]: {
                    ...state[root_container],
                    [action.container.tag]: action.container.dimensions
                },
            }
        case C.SETTINGS_SET_CONTAINER_THEME_COLOR:
            root_container = action.container.target || "containers"
            return {
                ...state,
                [root_container]: {
                    ...state[root_container],
                    [action.container.tag]: action.container.color
                },
            }
        case C.SETTINGS_SET_SELECTED_ITEM:
            root_container = action.container.target || "containers"
            return {
                ...state,
                [root_container]: {
                    ...state[root_container],
                    [action.container.tag]: action.container.selected
                },
            }
        default:
            return state
    }
}