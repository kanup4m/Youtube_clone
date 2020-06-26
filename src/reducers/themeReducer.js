const initialState = false

export const themeReducer = (state = initialState, action) => {
    if (action.type == 'change_theme') {
        return action.payload
    }
    return state
}

const initial = false

export const iconReducer = (state = initial, action) => {
    if (action.type == 'change_icon') {
        return action.payload
    }
    return state
}