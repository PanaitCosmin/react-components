import { useEffect, useState } from "react"

const ColorGenerator = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    const handleCreateColor = () => {
        if (typeOfColor === 'hex') {
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
            let hexColor = "#"

            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hex.length)] 
            }
            console.log(hexColor)
            setColor(hexColor)
        } else {
            const r = randomColorUtility(256)
            const g = randomColorUtility(256)
            const b = randomColorUtility(256)

            setColor(`rgb(${r}, ${g}, ${b})`)
            console.log(`rgb(${r}, ${g}, ${b})`)
        }
    }

    useEffect(() => {
        handleCreateColor()
    }, [typeOfColor])

    return (
    <div className="w-[75%] h-screen mb-12" style={{background: color}}>
        <div className="control w-full bg-white h-10">
            <button onClick={() => setTypeOfColor('hex')} className="bg-white text-black px-4 py-2 mb-4 hover:bg-gray-600">Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')} className="bg-white text-black px-4 py-2 mb-4  hover:bg-gray-600">Create RGB Color</button>
            <button onClick={ handleCreateColor} className="bg-white text-black px-4 py-2 mb-4  hover:bg-gray-600">Generate Random Color</button>            
        </div>

        <div className="flex flex-col justify-center items-center text-white font-bold text-lg mt-10 gap-4">
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default ColorGenerator