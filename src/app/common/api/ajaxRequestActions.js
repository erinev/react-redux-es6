import ajaxRequestActionTypes from './ajaxRequestActionTypes';

const beginAjaxRequest = () => {
    return { type: ajaxRequestActionTypes.BEGIN_AJAX_REQUEST };
};

const handleAjaxRequestError = () => {
    return { type: ajaxRequestActionTypes.AJAX_REQUEST_ERROR };
};

export default {
    beginAjaxRequest,
    handleAjaxRequestError
};
