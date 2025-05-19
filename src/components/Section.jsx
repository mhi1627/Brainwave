import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'
export default function Section({className, id, crosses, crossesOffset, customPadding, children}) {

  return (
    <div className={`relative  ${customPadding || 'py-10 lg:py-16 xl:py-20'} ${className || ''}`}>
      {children}

      <div className='hidden md:block pointer-events-none absolute w-0.25 h-full bg-stroke-1 top-0 left-5 lg:left-7.5 xl:left-10'></div>
      <div className=' hidden md:block pointer-events-none absolute w-0.25 h-full bg-stroke-1 top-0 right-5 lg:right-7.5 xl:right-10'></div>
       
       
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}
