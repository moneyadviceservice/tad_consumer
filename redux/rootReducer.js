import { combineReducers } from "redux";
import firmsReducer from "../components/listingsPage/reducer";

const rootReducer = combineReducers({
  data: firmsReducer,
});

export default rootReducer;
