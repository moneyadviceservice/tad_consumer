import { combineReducers } from "redux";
import ListingsReducer from "../components/listingsPage/redux/reducer";

const rootReducer = combineReducers({
  listings: ListingsReducer,
});

export default rootReducer;
