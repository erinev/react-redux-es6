import courseActionTypes from './courseActionTypes';
import initialState from '../store/initialState';

const courseReducer = (state = initialState.courses, action) => {
    switch(action.type) {
        case courseActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        case courseActionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.createdCourse)
            ];
        case courseActionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter((course) => course.id !== action.updatedCourse.id),
                Object.assign({}, action.updatedCourse)
            ];
        default:
            return state;
    }
};

export default courseReducer;
