import { userConstants } from "../actions/constants";

const initialState = {
    error: null,
    message: '',
    loading: false
};

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            };
        case userConstants.USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducers;
