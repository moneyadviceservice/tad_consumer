import { combineReducers } from "redux";
import firmsReducer from "../components/listingsPage/reducer";

const rootReducer = combineReducers({
  firms: firmsReducer,
});

export default rootReducer;
