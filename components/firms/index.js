import { Fragment, useEffect, useState } from 'react'
import { i18n, Link, withTranslation } from '../translation/i18n'

import { useSelector, useDispatch } from 'react-redux';
import { getFirms, getFirmsStarted } from './actions'



const Firms = ({t}) => {

    const firms = useSelector((state) => state.firms.firms);

    const dispatch = useDispatch();

    const [ age, setAge ] = useState('');
    const [ insuranceType, setInsuranceType] = useState('');
    const [ tripLength, setTripLength] = useState('');
    const [ treatmentStage, setTreatmentStage] = useState('');

    useEffect(() => {
        console.log(age)
      }, [age])



   

    useEffect(()=> {
        dispatch(getFirms());
        // console.log(firms)
    }, []);
    
    

 

    return(
        <Fragment>

        <form>
            <fieldset>
                <label htmlFor="age"> Filter by age:</label><br/>
                <input type="radio"  name="age" value={"Under 18"} onChange={e => setAge(e.target.value)}/>Under 18 years<br />
                <input type="radio"  name="age" value={"Between 18 and 80"} onChange={e => setAge(e.target.value)}/>Between 18 and 80 years<br />
                <input type="radio"  name="age" value={"Over 80"} onChange={e => setAge(e.target.value)}/>Over 80 years<br />
            </fieldset>

            <button>Submit</button>
        </form>
            <div>Firms</div>
           {firms.map((firm, i) => {
               return(
              
                <div key={i}>
                    <h1>{firm.company}</h1>
                    <h5>Get in touch</h5>
                    <p>{firm.online[0].phone}</p>
                    <p>{firm.online[0].email}</p>
                    <p>{firm.online[0].website}</p>
                    {firm.keyInfo.map((info, i) =>{
                        return(
                            <p key={i}></p>
                        )
                    }

                    )}
                </div>
            
               )
           }

           )}
    
        </Fragment>
    
    )
}


  

export default withTranslation('common')(Firms);
