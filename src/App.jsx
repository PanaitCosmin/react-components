import React from 'react'
import "./App.css"
import SingleAccordion from './components/accordion/SingleAccordion'
import MultiAccordion from './components/accordion/MultiAccordion'
import Accordion from './components/accordion/Accordion'

const App = () => {
  return (
    <div className='flex-col'>
      <div className='accordion flex-col justify-center'>
        <h1 className='mb-4 font-bold'>Accordion</h1>
        <Accordion />
        <hr />
      </div>
    </div>

  )
}

export default App