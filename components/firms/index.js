import { Fragment, useEffect } from 'react'
import { i18n, Link, withTranslation } from '../translation/i18n'

import { useSelector, useDispatch } from 'react-redux';
import { getFirms, getFirmsStarted } from './actions'



const Firms = ({t}) => {

    const firms = useSelector((state) => state.firms.firms);

    const dispatch = useDispatch();



   

    useEffect(()=> {
        dispatch(getFirms());
    }, []);
    
    console.log(firms)

 

    return(
        <Fragment>
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
                            <p key={i}>info</p>
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
