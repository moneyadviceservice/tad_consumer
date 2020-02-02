import { Fragment, useEffect, useState } from 'react'
import { withTranslation } from '../translation/i18n'

import Pagination from '../pagination'

import { useSelector, useDispatch } from 'react-redux';
import { getFirms, filterInsuranceType, filterAge, filterTripLength ,filterTreatmentStage } from './actions'



const Firms = ({t}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [firmsPerPage, setFirmsPerPage] = useState(3);
    const firms = useSelector((state) => state.firms.firms);

    // Get current firms
    const indexOfLastFirm = currentPage * firmsPerPage;
    const indexOfFirstFirn = indexOfLastFirm - firmsPerPage;
    const currentFirms = firms.slice(indexOfFirstFirn, indexOfLastFirm);

    const dispatch = useDispatch();

    // load all firms from the api on component on init
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


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const reloadFirms = () => {
        dispatch(getFirms());
    }
 

    return(
        <div  data-test='firms'>
       
        <form>
            <fieldset>
                
                <label htmlFor="age">{t("headings.age")}:</label><br/>
                {t("filters.age", {returnObjects: true}).map(({range, value}, i) => (
                    <div key={i} >
                         <input type="radio"  name="age" value={value} onChange={e => handleAgeChange(e)}/>
                         <span>{range}</span>
                    </div>
                ))}
            </fieldset>
            <fieldset>
                <label htmlFor="insuranceType"> {t("headings.insuranceType")}:</label><br/> 
                {t("filters.insuranceType", {returnObjects: true}).map(({type, value}, i) => (
                    <div key={i} >
                         <input type="radio"  name="insuranceType" value={value} onChange={e => handleInsuranceTypeChange(e)}/>
                         <span>{type}</span>
                    </div>
                ))}      
            </fieldset>
            <fieldset>
                <label htmlFor="tripLength"> {t("headings.tripLength")}:</label><br/>   
                {t("filters.tripLength", {returnObjects: true}).map(({length, value}, i) => (
                    <div key={i} >
                         <input type="radio"  name="tripLength" value={value} onChange={e => handleTripLengthChange(e)}/>
                         <span>{length}</span>
                    </div>
                ))}      
            </fieldset>
            <fieldset>
                <label htmlFor="treatmentStage">{t("headings.treatmentStage")}:</label><br/>    
                {t("filters.treatmentStage", {returnObjects: true}).map(({stage, value}, i) => (
                    <div key={i} >
                         <input type="radio"  name="treatmentStage" value={value} onChange={e => handleTreatmentStageChange(e)}/>
                         <span>{stage}</span>
                    </div>
                ))}    
            </fieldset>
            <button onClick={reloadFirms}>Reload</button>
        </form>
    
            <h2>Firms</h2>
                {currentFirms.map((firm, i) => {
               return(
           
                <div key={i}>
                    <h3>{firm.company}</h3>
                    <h5>Get in touch</h5> 
                    <p>{firm.online[0].phone}</p>
                    <p>{firm.online[0].email}</p>
                    <p>{firm.online[0].website}</p>
                   
                    
                </div>
               
               )
           }

           )}
         <Pagination firmsPerpage={firmsPerPage} totalFirms={firms.length} paginate={paginate}/>
        </div>
    
    )
}


  

export default withTranslation('listings')(Firms);
