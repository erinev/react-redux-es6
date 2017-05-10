const defaultSate = [];

const courseReducer = (state = defaultSate, action) => {
    switch(action.type) {
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.payload)];
        default:
            return state;
    }
};

export default courseReducer;
