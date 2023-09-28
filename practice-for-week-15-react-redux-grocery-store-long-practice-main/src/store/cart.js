const ADD_ITEM = 'cart/POPULATE';
const REMOVE_ITEM = 'cart/REMOVE';
const SUBTRACT_ITEM = 'cart/SUBTRACT';
const CLEAR_CART = 'cart/CLEAR';


export const addToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
        }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const subtractOneFromCart = (id) => {
    return {
        type: SUBTRACT_ITEM,
        id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export default function cartReducer(state = [], action) {
    const nextState = Object.assign([], Object.freeze(state))
    
    switch (action.type) {
        case ADD_ITEM:
            let idx = nextState.findIndex((el)=> el.id === action.id)
            if (idx >= 0) {
                nextState[idx].count += 1;
            } else {
                const newObj = {id: action.id, count: 1};
                nextState.push(newObj);
            }
            return nextState
        case REMOVE_ITEM:
            // delete nextState[nextState.indexOf(action.id)];
            return nextState.filter((el) => el.id !== action.id);
        case SUBTRACT_ITEM:
            let index = nextState.findIndex((el)=> el.id === action.id);
            console.log(index)
            let tempState = Object.assign([], Object.freeze(state));
            if (nextState[index].count===1) {
                tempState = nextState.filter((el) => el.id !== action.id);
            } else {
                tempState[index].count -= 1;
            }
            return tempState
        case CLEAR_CART:
            return {}
        default:
            return state;
    }
}
