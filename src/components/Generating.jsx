import React from 'react'
import { loading } from '../assets'
export default function Generating({children}) {
  return (
<div className='flex p-6 h-[3.5rem] bg-n-8/80  items-center absolute bottom-16 left-4 right-4 md:w-[32rem] md:left-1/2 md:-translate-x-1/2 backdrop-blur-sm border border-n-1/10 rounded-full text-center overflow-hidden'>
<img src={loading} alt="" className='w-4 h-4 mr-4'/>
 {children}
</div>
   
  )
}
