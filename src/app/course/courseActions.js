import courseActionTypes from './courseActionTypes';
import courseApi from './courseApiMock';
import ajaxRequestActions from '../common/api/ajaxRequestActions';

const loadCoursesSuccess = (courses) => {
    return { type: courseActionTypes.LOAD_COURSES_SUCCESS, courses };
};

const loadCoursesFailure = (errorMessage) => {
    throw(errorMessage);
    //return { type: courseActionTypes.LOAD_COURSES_FAILURE, error };
};

const createCourseSuccess = (createdCourse) => {
    return { type: courseActionTypes.CREATE_COURSE_SUCCESS, createdCourse };
};

const updateCourseSuccess = (updatedCourse) => {
    return { type: courseActionTypes.UPDATE_COURSE_SUCCESS, updatedCourse };
};

const loadCourses = () => {
    return (dispatch) => {
        dispatch(ajaxRequestActions.beginAjaxRequest());
        return courseApi.getAllCourses()
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((error) => {
                dispatch(loadCoursesFailure(error));
            });
    };
};

const saveCourse = (course) => {
    return (dispatch) => {
        dispatch(ajaxRequestActions.beginAjaxRequest());
        return courseApi.saveCourse(course)
            .then((savedCourse) => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            })
            .catch((errorMessage) => {
                dispatch(ajaxRequestActions.handleAjaxRequestError(errorMessage));
                throw(errorMessage);
            });
    };
};

export default {
    loadCourses,
    saveCourse
};
