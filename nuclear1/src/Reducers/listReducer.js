import rand from "../Functions/rand";
import randColor from "../Functions/randColor";


function listReducer(state, action) {
    let newState; 
    switch(action.type) {
        case 'new':
            newState = [...Array(10)].map((_, i) => { 
                return (
                    {
                        number: ('' + rand(0, 9999)).padStart(4, 0),
                        color: randColor(),
                        show: true,
                        row: i
                    }
                )
            });
            break;
        case 'sort':
            newState = [...state].sort((a, b) => {
                /* if (a > b) return -1;
                if (a < b) return 1;
                return 0; */ 
                return b.number - a.number;
            })
            break;
        case 'sort_Large':
            newState = state.map(o => o.number > 4000 ? {...o, show: true} : {...o, show: false})
            break;
        case 'sort_Small':
            newState = state.map(o => o.number < 4000 ? {...o, show: true} : {...o, show: false})
            break;
        case 'reset_Filter':
            newState = state.map(o => ({...o, show: true}))
            break;
        case 'reset_Sort':
            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        case 'reset_Color':
            newState = state.map(o => ({...o, color: 'grey'}))
            break;
        case 'add':
            newState = [...state, 
                    {
                        number: ('' + rand(0, 9999)).padStart(4, 0),
                        color: 'black',
                        show: true,
                        row: state.length
                    }];
            break;
        case 'softDelete':
            newState = state.map(o => ({...o, show: false}))
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default listReducer;