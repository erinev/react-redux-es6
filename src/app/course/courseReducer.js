import courseActionTypes from './courseActionTypes';
import initialState from '../store/initialState';

const courseReducer = (state = initialState.courses, action) => {
    switch(action.type) {
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default courseReducer;
