import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';
const LIKE_SWITCH = 'produce/LIKE';


export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    } 
}

export const likeProduce = (id) => {
    return {
        type: LIKE_SWITCH,
        id
    }
}

export default function produceReducer(state={}, action) {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case POPULATE: 
            action.produce.forEach(prod=>{
                nextState[prod.id] = prod;
            });
            return nextState;
        case LIKE_SWITCH:
            nextState[action.id].liked = !nextState[action.id].liked;
            return nextState
        default:
            return state;
    }
}
