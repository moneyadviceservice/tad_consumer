import axios from 'axios';
import {  
    GET_FIRMS_SUCCESS,
    GET_FIRMS_STARTED,
    FILTER_AGE,
    FILTER_INSURANCE_TYPE,
    FILTER_TRIP_LENGTH,
    FILTER_TREATMENT_STAGE,
 } from './constant'


 



export const getFirms = () =>{
    return dispatch => axios.get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
            .then(res => {
                dispatch(getFirmsSuccess(res.data))
              
            })
        
};

export const getFirmsSuccess = firms => ({
    type: GET_FIRMS_SUCCESS,
    payload: firms
       
    
});

export const getFirmsStarted = () => ({
    type: GET_FIRMS_STARTED
    
  });


export const filterAge = (age) => ({
    type: FILTER_AGE,
    payload: age
});

export const filterInsuranceType = (insuranceType) => ({
    type: FILTER_INSURANCE_TYPE,
    payload: insuranceType
});

export const filterTripLength = (tripLength) => ({
    type: FILTER_TRIP_LENGTH,
    payload: tripLength
});

export const filterTreatmentStage = (treatmentStage) => ({
    type: FILTER_TREATMENT_STAGE,
    payload: treatmentStage
});


