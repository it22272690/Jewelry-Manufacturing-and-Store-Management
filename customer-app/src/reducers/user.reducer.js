import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    name: "",
    address: "",
    DOB: "",
    phoneNumber: "",
    username: "",
  },
  authenticate: false,
  authenticating: false,
 
};

const userReducer =  (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initState
      };
      break;

  }

  return state;
};

export default userReducer;