import courseActionTypes from './courseActionTypes';
import courseApi from './courseApiMock';

const loadCoursesSuccess = (courses) => {
    return { type: courseActionTypes.LOAD_COURSES_SUCCESS, payload: courses };
};

const loadCoursesFailure = (error) => {
    throw(error);
    //return { type: courseActionTypes.LOAD_COURSES_FAILURE, payload: error };
};

const loadCourses = () => {
    return (dispatch) => {
        return courseApi.getAllCourses()
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((error) => {
                dispatch(loadCoursesFailure(error));
            });
    };
};

export default { loadCourses };
