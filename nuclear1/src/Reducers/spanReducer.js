import rand from '../Functions/rand'

export function spanReducer(state, action) {
    let newState;

    switch(action.type) {
        case 'change_number':
            newState = rand(1000, 9999);
            break;
        default:
            newState = state;
    }
    return newState;
}