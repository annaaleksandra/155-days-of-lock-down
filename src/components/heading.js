import React from 'react'

import headingStyles from './heading.module.scss'

const Heading = () => {
    return ( 
        <div className={headingStyles.text}>
            <h1 className={headingStyles.title}>What happened?</h1>
            <p className={headingStyles.paragraph}>On 23rd of March 2020, a nationwide lockdown was announced in the UK after COVID-19 outbreak.<br/> <br/> 
            To stop the transmission of the virus all non-essential workers were told to stay home until further notice. 
            Bars, pubs, hospitality venues and schools were quickly shut down to stop the spread. <br/> <br/> 
            Government funding was put in place to ensure that all furloughed workers would be financially stable. 
            On the 13th of August hospitality venues were allowed to open once again on a short notice. <br/> <br/> 
            Hospitality venues rushed to train the staff about social distancing.<br/> <br/> 
            The lockdown lasted 152 days in Scotland.</p>
        </div>
    )
}

export default Heading