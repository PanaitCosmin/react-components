import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({numberOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (currentIndex) => {
        setRating(currentIndex)
    }

    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }
  return (
    <div className='flex'>
        {
            [...Array(numberOfStars)].map((_, index) => {
                index += 1

                return (
                    <FaStar 
                    className= {index <= (hover || rating) ? 'text-amber-300' : 'text-black'}
                    size={60}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    />
                )
            })
        }
    </div>
  )
}

export default StarRating