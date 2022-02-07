import { combineReducers } from "redux";
import { UsersReducer } from "redux/users";
import { AlertReducer } from "redux/alert";

export default combineReducers({
  Users: UsersReducer,
  Alert: AlertReducer,
});
