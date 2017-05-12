import { combineReducers } from 'redux';
import coursesReducer from './course/courseReducer';
import authorReducer from './author/authorReducer';

const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorReducer
});

export default rootReducer;
