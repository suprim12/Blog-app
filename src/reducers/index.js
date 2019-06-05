import { combineReducers } from "redux";
// Reducers
import posts from "./postReducer";
import auth from "./authReducer";
import errors from "./errorReducer";
const rootReducer = combineReducers({
  posts: posts,
  auth: auth,
  errors
});
export default rootReducer;
