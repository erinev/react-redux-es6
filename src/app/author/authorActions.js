import authorActionTypes from './authorActionTypes';
import authorApi from './authorApiMock';
import ajaxRequestActions from '../common/api/ajaxRequestActions';

const loadAuthorsSuccess = (authors) => {
    return { type: authorActionTypes.LOAD_AUTHORS_SUCCESS, payload: authors };
};

const loadAuthorsFailure = (error) => {
    throw(error);
    //return { type: authorActionTypes.LOAD_AUTHORS_FAILURE, payload: error };
};

const loadAuthors = () => {
    return (dispatch) => {
        dispatch(ajaxRequestActions.beginAjaxRequest());
        return authorApi.getAllAuthors()
            .then((authors) => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch((error) => {
                dispatch(loadAuthorsFailure(error));
            });
    };
};

export default {
    loadAuthors
};
