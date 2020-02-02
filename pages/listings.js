import React, { Fragment } from 'react'
import Firms from '../components/firms'
import { withTranslation } from '../components/translation/i18n'



const Listings = () => {

    return (
      <Fragment>
      
        <Firms />
      </Fragment>
    )
 
}



export default withTranslation('listings')(Listings)
