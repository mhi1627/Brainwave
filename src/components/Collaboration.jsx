import React from 'react'
import Section from './Section'
import CheckInfo from './CheckInfo'
import { collabApps, collabContent } from '../constants'
import { brainwaveSymbol } from '../assets'
import Button from './Button'
import { LeftCurve, RightCurve } from "./design/Collaboration";


export default function Collaboration() {
  return (
    <Section crosses>
        <div className='container md:flex mt-[3rem]'>
            <div className='max-w-[25rem] mx-auto md:mx-0 '>
                <h2 className='h2'>AI Chat App for seamless collaboration</h2>
                 <div className='mt-5 mb-5 '>
                  {collabContent.map(item=>(
                    <CheckInfo className={``} text={item.text}>{item.title}</CheckInfo>
                  ))}
                 </div>
                 <Button>Try it Now</Button>
            </div>
          
              <div className='ml-auto md:mr-10 lg:-mr-20'>
                <div className='mt-10 md:mt-0 mb-10 text-center body-1 text-n-4 sm:w-2/3 mx-auto '>
                    <h4> 
                With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
                    </h4>
                </div>
                 <div className='border1 border border-n-6 rounded-full w-[16rem]  left-1/2 relative -translate-x-1/2 aspect-square sm:w-[24rem] flex'>
                <div className='border1 border flex relative border-n-6 rounded-full w-[12rem] sm:w-[16rem]  m-auto aspect-square'>
                   <div className='bg-conic-gradient sm:w-[6rem] w-[4rem]  m-auto  aspect-square p-0.25 rounded-full flex  items-center justify-center' >
                    <div className='bg-rounded border bg-n-8 w-full h-full rounded-full  flex items-center justify-center'>
                        <img src={brainwaveSymbol} alt="" width={48} height={48}/>
                    </div>
                   </div>
                </div>

              <ul>
                 {collabApps.map((app,index)=>(
                 <li key={app.id}
                  className={`absolute  top-0 left-1/2 h-1/2 sm:-ml-[1.6rem] -ml-[1rem]  origin-bottom rotate-${index * 45}`}
                  >
                   <div className={`relative sm:-top-[1.6rem] -top-[1.3rem] flex sm:w-[3.2rem] w-[2rem] h-[2rem] sm:h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                   
                    <img src={app.icon} alt="" className='m-auto' width={app.width} height={app.height}/>
                   </div>
                </li>
               ))}
              </ul>
                <LeftCurve />
                <RightCurve />
               </div>

              </div>
           
        </div>
    </Section>
  )
}
