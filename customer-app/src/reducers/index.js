
import { combineReducers } from "redux";
import userReducer from './user.reducer';
import userReducers from './users.reducers';

const rootReducer=combineReducers({
   auth:userReducer,
   user:userReducers
});

export default rootReducer;

