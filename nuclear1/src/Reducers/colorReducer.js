export function colorReducer(state, action) {
    let newState;

    switch(action.type) {
        case 'go_pink':
            newState = 'pink';
            break;
        case 'go_grey':
            newState = 'grey';
            break;
        case 'change_color':
            newState = state === 'grey' ? 'pink' : 'grey';
            break;
        case 'change_background':
            newState = input;
        default:
            newState = state;
    }
    return newState;
}