import React, { useState } from 'react'
import data from "./data"

const MultiAccordion = () => {
    const [multiple, setMultiple] = useState([])

    const handleMultiSelection = (currentId) => {
        const cpyMultiple = [...multiple]
        const indexCurrentElem = cpyMultiple.indexOf(currentId)
        if(indexCurrentElem === -1) {
            cpyMultiple.push(currentId)
        } else {
            cpyMultiple.splice(indexCurrentElem, 1)
        }

        setMultiple(cpyMultiple)
    }
  return (
    <div>
    {data.map((feature) => (
        <div key={feature.id} className='w-72'>
            <div className='flex p-6 justify-between items-center bg-green-300'>
                <h2 className='mx-4'>{feature.name}</h2>
                <button onClick={() => handleMultiSelection(feature.id)}>+</button>
            </div>
            {multiple.indexOf(feature.id) !== -1 && (
                <div key={feature.id} className='p-4 bg-green-400'>
                    {feature.desc}
                </div>
            )}
        </div>
    ))}
</div>
  )
}

export default MultiAccordion