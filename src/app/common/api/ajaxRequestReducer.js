import ajaxRequestActionTypes from './ajaxRequestActionTypes';
import initialState from '../../store/initialState';

function isSuccessAction(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

const ajaxStatusReducer = (state = initialState.numberOfAjaxCallsInProgress, action) => {
    if (action.type === ajaxRequestActionTypes.BEGIN_AJAX_REQUEST) {
        return state + 1;
    } else if (action.type === ajaxRequestActionTypes.AJAX_REQUEST_ERROR || isSuccessAction(action.type)) {
        return state - 1;
    }
    return state;
};

export default ajaxStatusReducer;
