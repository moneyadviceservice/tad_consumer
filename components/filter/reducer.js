import {  
    FILTER_AGE,
    FILTER_INSURANCE_TYPE,
    FILTER_TRIP_LENGTH,
    FILTER_TREATMENT_STAGE
 } from './constant'

let initialState = {
  loading: false,
  firms:[]
}

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
    default:
      return state;
    break;
  }
}
export default firmsReducer;