import { GET_FIRMS_SUCCESS, GET_OFFERINGS_SUCCESS } from "./constant";
import { getFirms } from "./actions";
import axios from "axios";

let initialState = {
  loading: false,
  firms: [],
};

const firmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FIRMS_STARTED":
      return {
        ...state,
        loading: true,
      };
      break;
    case GET_FIRMS_SUCCESS:
      return {
        ...state,
        firms: action.payload,
      };
      break;
    case GET_OFFERINGS_SUCCESS:
      return {
        ...state,
        offerings: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
export default firmsReducer;
