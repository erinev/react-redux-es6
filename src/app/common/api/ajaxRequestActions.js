import ajaxRequestActionTypes from './ajaxRequestActionTypes';

const beginAjaxRequest = () => {
    return { type: ajaxRequestActionTypes.BEGIN_AJAX_REQUEST };
};

export default {
    beginAjaxRequest
};
