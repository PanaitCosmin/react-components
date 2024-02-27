import React from 'react'
import "./App.css"
import SingleAccordion from './components/accordion/SingleAccordion'
import MultiAccordion from './components/accordion/MultiAccordion'
import Accordion from './components/accordion/Accordion'
import ColorGenerator from './components/color_generator/ColorGenerator'

const App = () => {
  return (
    <div>

      <div className='accordion '>
        <h1 className='mb-4 font-bold'>Accordion</h1>
        <Accordion />
      </div>
      <hr />

      <div className='random-color flex flex-col items-center'>
        <h1 className='mb-4 font-bold'>Random Color Generator</h1>
        <ColorGenerator />
      </div>
      <hr />
      
    </div>

  )
}

export default App