import courseActionTypes from './courseActionTypes';

const defaultSate = [];

const courseReducer = (state = defaultSate, action) => {
    switch(action.type) {
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default courseReducer;
