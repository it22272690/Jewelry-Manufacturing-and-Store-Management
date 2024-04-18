import userReducers  from "./user.reducers";
import { combineReducers } from "redux";
import userReducer from './users.reducers';

const rootReducer=combineReducers({
    auth:userReducers,
    user:userReducer
});

export default rootReducer;

