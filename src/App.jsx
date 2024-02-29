import React from 'react'
import "./App.css"
import Accordion from './components/accordion/Accordion'
import ColorGenerator from './components/color_generator/ColorGenerator'
import StarRating from './components/star_rating/StarRating'

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
      
      <div className="star-rating flex flex-col justify-center items-center">
        <h1 className='mb-4 font-bold'>Star Rating</h1>
        <StarRating />
      </div>
      <hr />
    </div>

  )
}

export default App