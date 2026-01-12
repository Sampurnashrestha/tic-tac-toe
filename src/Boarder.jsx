import React, { useState } from 'react'
import Box from './Box'

const Boarder = () => {
  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [boxtext, setBoxText] = useState(Array(9).fill(null))
  const [isXnext, setISXnext] = useState(true)
  const calculateWinner = () => {
    const winnerCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let index = 0; index < winnerCondition.length; index++) {
      const [a, b, c] = winnerCondition[index];
      if (boxtext[a] && boxtext[a] === boxtext[b] && boxtext[a] === boxtext[c]) {
        return boxtext[a];
      }

    }
    return null
  }
  const winner = calculateWinner(boxtext)
  const handleClick = (boxIndex) => {

    setBoxText(prev => {
      if (prev[boxIndex] || winner) return prev
      const newarr = [...prev]
      newarr[boxIndex] = isXnext ? "X" : "O";
      setISXnext(!isXnext)
      return newarr
    })
  }

  const reset = () => {
    if (!winner) return
    setBoxText(Array(9).fill(null))
    setISXnext(true)
  }

  return (
    <>
      <div className=' flex flex-col '>
        <h2 className="text-lg font-semibold">
          {winner ? `Winner: ${winner}` : ``}
        </h2>
        {isXnext ? "PLayer: 1" : "Player 2"}
        <div className='grid grid-cols-3'>
          {box.map((boxs, i) =>
            <Box key={boxs} onClicks={() => handleClick(i)} text={boxtext[i]} />
          )}
        </div>
     
      <button
        onClick={reset}
        disabled = {!winner}
        className={`mt-4 px-2 py-2 bg-red-500  text-white  rounded  ${winner ? "  hover:bg-red-600 cursor-pointer" : "hover:bg-red-700  cursor-not-allowed"}`}
       >
        Reset
       </button>
   
       
         </div>
    </>
  )
}

export default Boarder
