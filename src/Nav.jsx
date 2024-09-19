import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

export default function Nav({getdata}) {
const [f,setf]=useState('')    
function change(e){
    setf(e.target.value)
    

}

function handle(){
    console.log(f);
    getdata(f)
    setf('')
    

}

  return (


    <div className='w-full h-max flex justify-center items-center bg-pink-500 flex-row p-4'>
        <input onChange={change}  className='p-2 w-[80%] rounded-sm border-none placeholder:text-black' type="text" value={f} placeholder='Enter eg-Hulk,Nun' />
        <button onClick={handle} className='bg-[#171614] p-3 pl-3 text-white font-semibold rounded-sm'><FaSearch /></button>
      
    </div>
  )
}
