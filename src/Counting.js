import React, { useState } from 'react'

function Counting() {
const [count,setCount]=useState(0)

const handleincrease=()=>{
    setCount(count+1)
}

const handledecrease=()=>{
    setCount(count-1)
}

  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={handleincrease}>increase</button>
        <button onClick={handledecrease}>decrease</button>
    </div>
  )
}

export default Counting