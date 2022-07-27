import updateBaalance from "./balanceUpdate";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  amount: updateBaalance,
});
export default rootReducer;
