import authorActionTypes from './authorActionTypes';
import initialState from '../store/initialState';

const authorReducer = (state = initialState.authors, action) => {
    switch(action.type) {
        case authorActionTypes.LOAD_AUTHORS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default authorReducer;
