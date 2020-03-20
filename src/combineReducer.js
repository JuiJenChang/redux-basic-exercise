import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import addTodoReducer from "./reducers/addTodoReducer";

const rootReducer = combineReducers({
  counterReducer,
  addTodoReducer
});

export default rootReducer;
