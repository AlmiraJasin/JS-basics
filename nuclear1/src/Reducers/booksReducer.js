export function booksReducer(state, action) {
    let newState;
    switch(action.type) {
        case 'get_from_server':
            newState = action.payload.map((b, i) => ({...b, row: i}));
            break;
        case 'sort_by_title':
            newState = [...state].sort((a, b) => { 
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            });
            break;
        case 'reset_sort':
            newState = [...state].sort((a, b) => {
               return a.row - b.row;
            })
            break;
        default:
            newState = [...state];
    }
    return newState;
}