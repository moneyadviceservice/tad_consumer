import axios from 'axios';
import {  
    GET_FIRMS_SUCCESS,
    GET_FIRMS_STARTED
 } from './constant'

 

//  export const getAllFirms = () => {
//     return (dispatch) => {
//       fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then(res => res.json())
//         .then(firms => {
//           dispatch({
//             type: GET_FIRMS,
//             payload: firms
//           })
//         })
//     }
//   }

//   export const getFirms = () =>{
//     return dispatch => axios.get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
//         .then(({ data }) => data)
//         .then(firms => dispatch({ type: 'GET_FIRMS', firms}));
// }

export const getFirms = () =>{
    return dispatch => axios.get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
            .then(res => {
                dispatch(getFirmsSuccess(res.data))
              
            })
        
};

export const getFirmsSuccess = firms => ({
    type: GET_FIRMS_SUCCESS,
    payload: [
        ...firms
    ]
});

export const getFirmsStarted = () => ({
    type: GET_FIRMS_STARTED
    
  });

