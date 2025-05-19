import React from 'react'
import Button from './Button'
import CheckInfo from './CheckInfo'

export default function PricingCard({title, description, price, features,}) {
  return (
    <div className='border border-n-4 p-6 rounded-3xl mt-6  even:py-14 lg:odd:py-8 lg:even:-my-1 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3'>
        <h4 className='h4 mb-4 mt-3'>{title}</h4>
        <p className='body-2 text-n-4 mb-12'>{description}</p>
        {price ? <h1 className='h1 mb-8 flex items-center '>$<span className='text-[6rem]'>{price}</span></h1>: <h1 className='h1 hidden lg:block mb-8 items-center opacity-0'>$<span className='text-[6rem]'>{price}</span></h1>}
        {price ? <Button className={`w-full mb-6`} white={`white`}>Get Started</Button> : <Button className={`w-full mb-6`}>Contact Us</Button>}
       {features.map(feature =>{
        return <CheckInfo className={`border-t border-n-5`}>{feature}</CheckInfo>
       })}
    </div>
  )
}
