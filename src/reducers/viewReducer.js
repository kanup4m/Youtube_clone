const initial = []

export const viewReducer = (state = initial, action) => {
    if (action.type == 'view') {
        return action.payload
    }
    return state
}