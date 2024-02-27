import React, { useState } from 'react'
import data from "./data"

const SingleAccordion = () => {
    const [ selected, setSelected] = useState(null)

    const handleSingleSelection = (currentId) => {
        setSelected(currentId === selected ? null : currentId)
    }

  return (
    <div>
    {data.map((feature) => (
        <div key={feature.id} className='w-72'>
            <div className='flex p-6 justify-between items-center bg-green-300'>
                <h2 className='mx-4'>{feature.name}</h2>
                <button onClick={() => handleSingleSelection(feature.id)}>+</button>
            </div>
            {selected === feature.id && (
                <div key={feature.id} className='p-4 bg-green-400'>
                    {feature.desc}
                </div>
            )}
        </div>
    ))}
</div>
  )
}

export default SingleAccordion