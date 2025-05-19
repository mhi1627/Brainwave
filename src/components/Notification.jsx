import React from 'react'
import { notification1 } from "../assets";
import { notificationImages } from "../constants";
export default function Notification({title,className}) {
  return (
    <div className={`${className} flex bg-n-6/90 absolute  rounded-2xl p-4 pr-6 justify-between backdrop-blur border border-n-1/10  gap-5`}>
        <img src={notification1} alt=""  className='rounded-xl' width={62}
        height={62}/>
        <div className='flex flex-col justify-between'> 
            <h6 className='mb-1 font-semibold text-base'>{title}</h6>
            <div className='flex justify-between'>
                <ul className='flex -m-0.5'>
                    {notificationImages.map(img=>
                        <li key={img} className='flex w-6 h-6 rounded-full border-n-12 overflow-hidden'>
                            <img src={img} alt="" className='w-full'  width={20}
                  height={20}/>   
                        </li>
                    )}
                </ul>


                <div>
                    <h6 className='body-2 text-n-13'>1m ago</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
