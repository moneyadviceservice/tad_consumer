import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  FILTER_OFFERING,
} from "./constants";

let initialState = {
  firms: [],
  offerings: [],
};

const ListingsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case FILTER_OFFERING:
      return {
        ...state,
        offered: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
export default ListingsReducer;
