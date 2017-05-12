import courseActionTypes from './courseActionTypes';
import courseApi from './courseApiMock';

const loadCoursesSuccess = (courses) => {
    return { type: courseActionTypes.LOAD_COURSES_SUCCESS, courses };
};

const loadCoursesFailure = (error) => {
    throw(error);
    //return { type: courseActionTypes.LOAD_COURSES_FAILURE, error };
};

const createCourseSuccess = (createdCourse) => {
    return { type: courseActionTypes.CREATE_COURSE_SUCCESS, createdCourse };
};

const updateCourseSuccess = (updatedCourse) => {
    return { type: courseActionTypes.UPDATE_COURSE_SUCCESS, updatedCourse };
};

const saveCoursesFailure = (error) => {
    throw(error);
    //return { type: courseActionTypes.SAVE_COURSE_FAILURE, error };
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

const saveCourse = (course) => {
    return (dispatch) => {
        return courseApi.saveCourse(course)
            .then((savedCourse) => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            })
            .catch((error) => {
                dispatch(saveCoursesFailure(error));
            });
    };
};

export default { loadCourses, saveCourse };
