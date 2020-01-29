import { Fragment, useEffect, useState } from 'react'
import { i18n, Link, withTranslation } from '../translation/i18n'

import { useSelector, useDispatch } from 'react-redux';
import { getFirms, filterInsuranceType, filterAge, filterTripLength ,filterTreatmentStage } from './actions'



const Firms = ({t}) => {

    const firms = useSelector((state) => state.firms.firms);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getFirms());
    }, []);
    
    const handleAgeChange = (e) => {
        let age = e.target.value
        dispatch(filterAge(age));
    
    };

    const handleInsuranceTypeChange =(e) => {
        let insuranceType = e.target.value
        dispatch(filterInsuranceType(insuranceType));
    
    };

    const handleTripLengthChange =(e) => {
        let tripLength = e.target.value
        dispatch(filterTripLength(tripLength));
    
    };
 
    const handleTreatmentStageChange =(e) => {
        let treatmentStage = e.target.value
        dispatch(filterTreatmentStage(treatmentStage));
    
    };

 

    return(
        <Fragment>

        <form>
            <fieldset>
                <label htmlFor="age">Age:</label><br/>
    
                <input type="radio"  name="age" value={"Under 18 years"} onChange={e => handleAgeChange(e)}/>Under 18 years<br />
                <input type="radio"  name="age" value={"Between 18 and 80 years"} onChange={e => handleAgeChange(e)}/>Between 18 and 80 years<br />
                <input type="radio"  name="age" value={"Over 80 years"} onChange={e => handleAgeChange(e)}/>Over 80 years<br />
            </fieldset>
            <fieldset>
                <label htmlFor="insuranceType"> Type of Insurance:</label><br/>       
                <input type="radio"  name="insuranceType" value={"Single Trip"} onChange={e => handleInsuranceTypeChange(e)}/>Single Trip<br />
                <input type="radio"  name="insuranceType" value={"Annual Multi-Trip"} onChange={e => handleInsuranceTypeChange(e)}/>Annual Multi Trip
            </fieldset>
            <fieldset>
                <label htmlFor="tripLength"> Length of Trip:</label><br/>       
                <input type="radio"  name="tripLength" value={"Under 1 month"} onChange={e => handleTripLengthChange(e)}/>Under 1 month<br />
                <input type="radio"  name="tripLength" value={"Between 1 - 3 months"} onChange={e => handleTripLengthChange(e)}/>Between 1 - 3 months<br />
                <input type="radio"  name="tripLength" value={"Between 3 - 6 months"} onChange={e => handleTripLengthChange(e)}/>Between 3 - 6 months<br />
                <input type="radio"  name="tripLength" value={"Over 6 months"} onChange={e => handleTripLengthChange(e)}/>Over 6 months<br />
            </fieldset>
            <fieldset>
                <label htmlFor="tripLength"> Treatment Stage:</label><br/>       
                <input type="radio"  name="tripLength" value={"Going abroad for treatment / surgery"} onChange={e => handleTreatmentStageChange(e)}/>I am going abroad for medical treatment or surgery<br />
                <input type="radio"  name="tripLength" value={"Surgery waiting list"} onChange={e => handleTreatmentStageChange(e)}/>I am on a waiting list at home for treatment or surgery<br />
                <input type="radio"  name="tripLength" value={"Awaiting test result"} onChange={e => handleTreatmentStageChange(e)}/>I am awating test results<br />
                <input type="radio"  name="tripLength" value={"Terminal prognosis"} onChange={e => handleTreatmentStageChange(e)}/>My doctor has given me a terminal prognosis<br />
            </fieldset>
        </form>
            <div>Firms</div>
           {firms.map((firm, i) => {
               return(
              
                <div key={i}>
                    <h1>{firm.company}</h1>
                    {/* <h5>Get in touch</h5> */}
                    {/* <p>{firm.online[0].phone}</p>
                    <p>{firm.online[0].email}</p>
                    <p>{firm.online[0].website}</p> */}
                    {/* {firm.keyInfo.map((info, i) =>{
                        return(
                            <p key={i}></p>
                        )
                    }

                    )} */}
                </div>
            
               )
           }

           )}
    
        </Fragment>
    
    )
}


  

export default withTranslation('common')(Firms);
