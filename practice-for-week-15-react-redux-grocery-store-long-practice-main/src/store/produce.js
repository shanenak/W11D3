import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

export default function produceReducer(state={}, action) {
    switch (action.type) {
        case POPULATE: 
            const nextState={};
            action.produce.forEach(prod=>{
                nextState[prod.id] = prod;
            });
            return nextState;
        default:
            return state;
    }
}

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    } 
}