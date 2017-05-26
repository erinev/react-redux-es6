import { combineReducers } from 'redux';
import coursesReducer from './course/courseReducer';
import authorReducer from './author/authorReducer';
import ajaxRequestReducer from './common/api/ajaxRequestReducer';

const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorReducer,
    numberOfAjaxRequestsInProgress: ajaxRequestReducer
});

export default rootReducer;
