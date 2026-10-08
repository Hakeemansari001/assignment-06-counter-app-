import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0);

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-2 '>
      <div className='bg-amber-100 w-40 h-40 rounded-2xl flex justify-center items-center text-5xl '>{count}

      </div>
<div className='flex gap-2' >
    <button className=' bg-black text-white w-10 rounded-xs' onClick={function(){
      setCount(count +1)
    }}>+</button>

     <button className=' bg-black text-white w-10 rounded-xs' onClick={function(){
      setCount(count -1)
    }}>-</button>

     <button className=' bg-black text-white w-10 rounded-xs' onClick={function(){
      setCount(0)
    }}>Rest</button>

  </div>      
    </div>
  )
}

export default App
