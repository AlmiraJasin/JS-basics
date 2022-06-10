export function kvReducer(state, action) {
    let newState;

    switch(action.type) {
        case 'get_kv':
            newState = [...state, true];
            break;
        default:
            newState = [...state];
    }
    return newState;
}