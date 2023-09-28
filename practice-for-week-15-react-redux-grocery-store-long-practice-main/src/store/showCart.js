const SHOW_CART = 'showCart/SHOW';
const HIDE_CART = 'showCART/HIDE';

export const showCartAction = () => {
    return {
        type: SHOW_CART
    }
}

export const hideCartAction = () => {
    return {
        type: HIDE_CART
    }
}

export default function cartShowReducer (state=false, action) {
    switch (action.type) {
        case SHOW_CART:
            return true
        case HIDE_CART:
            return false
        default:
            return state;
    }
}