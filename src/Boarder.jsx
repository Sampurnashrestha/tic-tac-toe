import React, { useState } from 'react'
import Box from './Box'

const Boarder = () => {
    const box=[1,2,3,4,5,6,7,8,9];
    const [boxtext, setBoxText] = useState([null,null,null,null,null,null,null,null,null])

    const handleClick = (boxIndex)=>{
      console.log("object")
        setBoxText(prev =>{
            const newarr =[...prev]
            newarr[boxIndex] = "x"
            return newarr
        })
    }

  return (
    <>
        <div className='grid grid-cols-3'>
        {box.map((boxs,i)=>
                <Box key={boxs} onClicks={()=>handleClick(i)} text={boxtext[i]}/>
            )}
            </div>
      
    </>
  )
}

export default Boarder
