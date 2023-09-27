const ADD_ITEM = 'cart/POPULATE'

export const addToCart = (id) => {
    return {
        type: ADD_ITEM,
        id,
        count: 1
    }
}

export default function cartReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case ADD_ITEM:

            const x = state[action.id] ? state[action.id].count + 1 : 1;
            const actionId = action.id
            const newObj = {id: action.id, count: x}
            nextState[action.id] = newObj
            return nextState
        default:
            return state;
    }
}
