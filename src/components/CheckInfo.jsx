import React from 'react'
import { check } from '../assets'
export default function CheckInfo({children,text,className}) {
  return (
    <div className={`ml-2 ${className} py-3`}>
       {children && 
       <>
        <img src={check} alt="" className='inline '/>
        <h4 className='inline ml-5 body-2 '>{children}</h4>
        <p className='body-2 text-n-4 mt-2 '>{text}</p>
       </>
       }
    </div>
  )
}
