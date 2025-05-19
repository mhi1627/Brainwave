import React from 'react'
import Tagline from './Tagline'
export default function Heading({className,children,tagline,text}) {
  return (
    <div className={`${className} text-center max-w-[50rem] mx-auto mb-[5rem]`}>
        {tagline && <Tagline className={`mb-[1rem] mt-[1.5rem] text-center`}>{tagline}</Tagline>}
        {children && <h2 className='h2 md:mb-[1rem] mb-[0.9rem]'>{children}</h2>}
        {text && <p>{text}</p>}

    </div>
  )
}
