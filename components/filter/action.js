import {  
    FILTER_AGE,
    FILTER_INSURANCE_TYPE,
    FILTER_TRIP_LENGTH,
    FILTER_TREATMENT_STAGE
 } from './constant'



// export const filterAge = () =>{
//     return dispatch => axios.get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
//             .then(res => {
//                 dispatch(getFirmsSuccess(res.data))
              
//             })
        
// };

 export const filterAgeSuccess = age => ({
    type: GET_FIRMS_SUCCESS,
    payload: age
});