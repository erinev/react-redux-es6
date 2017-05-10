import { combineReducers } from 'redux';
import coursesReducer from './course/courseReducer';

const rootReducer = combineReducers({
    courses: coursesReducer
});

export default rootReducer;
