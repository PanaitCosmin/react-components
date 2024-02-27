import React from 'react'
import SingleAccordion from './SingleAccordion'
import MultiAccordion from './MultiAccordion'

const Accordion = () => {
    return (
        <div className='h-screen flex flex-col md:flex-row items-center justify-between mb-12'>
    
          <div className="md:flex-col">
            <h1>Single Selection</h1>
            <SingleAccordion />
          </div>
    
          <div className="md:flex-col ml-0 md:ml-4 mt-4 md:mt-0 mb-4">
            <h1>Multiple Selection</h1>
            <MultiAccordion />
          </div>
    
        </div>
      )
}

export default Accordion