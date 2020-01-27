import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';


const Filter =()=>{

    

    const dispatch = useDispatch();

    const [ age, setAge ] = useState('');
    const [ insuranceType, setInsuranceType] = useState('');
    const [ tripLength, setTripLength] = useState('');
    const [ treatmentStage, setTreatmentStage] = useState('');

    useEffect(() => {
        console.log(age)
      }, [age])

    
    return(
        <form>
            <fieldset>
                <label htmlFor="age"> Filter by age:</label><br/>
                <input type="radio"  name="age" value={"Under 18"} onChange={e => setAge(e.target.value)}/>Under 18 years<br />
                <input type="radio"  name="age" value={"Between 18 and 80"} onChange={e => setAge(e.target.value)}/>Between 18 and 80 years<br />
                <input type="radio"  name="age" value={"Over 80"} onChange={e => setAge(e.target.value)}/>Over 80 years<br />
            </fieldset>

            <button>Submit</button>
        </form>
    )
}



export default Filter;