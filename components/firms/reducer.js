import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  GET_FIRMS_STARTED,
  FILTER_AGE,
  FILTER_INSURANCE_TYPE,
  FILTER_TRIP_LENGTH,
  FILTER_TREATMENT_STAGE,
  FILTER_OFFERING,
  FILTER
} from "./constant";
import { getFirms } from "./actions";
import axios from "axios";

let initialState = {
  loading: false,
  firms: []
};

const firmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FIRMS_STARTED":
      return {
        ...state,
        loading: true
      };
      break;
    case GET_FIRMS_SUCCESS:
      return {
        ...state,
        firms: action.payload
      };
      break;
    case GET_OFFERINGS_SUCCESS:
      return {
        ...state,
        offerings: action.payload
      };
      break;
    case FILTER_AGE:
      return {
        ...state,
        firms: state.firms.filter(firms => {
          return firms.filters.age.includes(action.payload);
        })
      };
      break;
    case FILTER_INSURANCE_TYPE:
      return {
        ...state,
        firms: state.firms.filter(firms => {
          return firms.filters.insuranceType.includes(action.payload);
        })
      };
      break;
    case FILTER_TRIP_LENGTH:
      return {
        ...state,
        firms: state.firms.filter(firms => {
          return firms.filters.tripLength.includes(action.payload);
        })
      };
      break;
    case FILTER_TREATMENT_STAGE:
      return {
        ...state,
        firms: state.firms.filter(firms => {
          return firms.filters.treatmentStage.includes(action.payload);
        })
      };
      break;
    case FILTER:
      return {
        ...state,
        firms: action.payload.reduce(
          (acc, value) =>
            acc.filter(firm =>
              firm.offerings.some(offer =>
                offer[Object.keys(value)].includes(Object.values(value)[0])
              )
            ),

          state.firms
        )
      };
    case FILTER_OFFERING:
      return {
        ...state,
        offered: action.payload
      };
      break;
    default:
      return state;
      break;
  }
};
export default firmsReducer;
