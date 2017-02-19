const initialState = {
    food: 0,
    wood: 0,
    stone: 0
};

const resourcesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE':
            state = {...state, [action.resource]: state[action.resource] + 1};
            break;
        case 'CONSUME':
            state = {...state, [action.resource]: state[action.resource] - 1};
            break;
        default:
            break;
    }

    return state;
};

export default resourcesReducer;