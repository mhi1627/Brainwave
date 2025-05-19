import React from 'react'
import { grid, roadmap1,check2, loading,loading1 } from '../assets'
import TagLine from './Tagline'

export default function FeatureCard({title,text,date,status,imgUrl, colorful}) {
 
  return (
    <div className='relative overflow-hidden border border-n-6 lg:py-10 p-6 lg:min-h-[46rem] rounded-3xl bg-n-8'>
      <div className='absolute overflow-hidden top-0 left-0'>
        <img src={grid} alt="" />
      </div>
      <div className='relative z-1 '>
        <div className='flex justify-between lg:px-8'>
            <TagLine>{date}</TagLine>
        <div className='bg-white px-3 p-1 mx-2 items-center text-black flex w-fit lg:mx-auto'>
            <img src={status === 'done' ?  check2 : loading1} alt="" />
            <div className='tagline '>
                {status}
            </div>
        </div>
        </div>
        <div>
            <img src={imgUrl} alt="" />
        </div>
      </div>
        <div className='flex flex-col lg:absolute bottom-10'>
            <h4 className='h4 mb-6'>{title}</h4>
            <p className='body-2 text-n-4'>{text}</p>
        </div>
    </div>
  )
}
