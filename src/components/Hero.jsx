import React, { useRef } from 'react'
import Section from './Section'
import Button from './Button'
import {curve,robot,heroBackground, loading} from '../assets/'
import { BottomLine, Gradient,BackgroundCircles } from './design/Hero'
import { heroIcons } from '../constants'
import { ScrollParallax } from 'react-just-parallax'
import Notification from './Notification'
import CompanyLogo from './CompanyLog'
import Generating from './Generating'
export default function Hero() {
    const parallaxRef = useRef(null)
  return (
  <Section
  className='pt-[12.5rem] -mt-[5.25rem]'
  customPadding
  crosses
  >
    <div className=' container relative ' ref={parallaxRef}>
        <div className='relative z-1 max-w-[60rem] mx-auto text-center px-2 mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
            <h1 className='h1 mb-6'>Explore the Possibilities <br /> of AI Chatting with <span className='inline-block relative'>Brainwave <img src={curve} alt="" className='absolute' /></span></h1>
            <p className='body-1 mt-7 mb-6 text-n-2 lg:mb-8 max-w-3xl mx-auto'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <Button white={"white"}>Get Started</Button>
        </div>

        <div className='relative mx-auto max-w-[23rem] md:max-w-[64rem] '>
            <div className='z-1 relative bg-conic-gradient p-0.5 rounded-2xl'>
               <div className='relative bg-n-8 rounded-[0.9rem] overflow-hidden'>
                 <div className='h-[1.4rem] bg-n-10 '></div>

                <div className='overflow-hidden aspect-[33/40] rounded-b-[0.9rem] md:aspect-[8/7] lg:aspect-[2/1]'>
                    <img src={robot} alt="AI"  className='w-full scale-[1.7]  md:scale-[1] translate-y-[8%] lg:-translate-y-[23%] md:-translate-y-[13%]'/>

               
                </div>
               </div>
               <Generating>AI is Generating</Generating>                
                <ScrollParallax isAbsolutelyPositioned>
               <ul className='hidden xl:flex p-1 bg-n-9/40  rounded-2xl border-n-1/10  absolute top-[35%] -left-[10%]  backdrop-blur-sm '>
                {heroIcons.map((icon,index)=>(
                    <li key={index} className='p-5'>
                        <img src={icon} alt="" />
                    </li>
                ))}
               </ul>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
                <Notification title={"Code Generating"} className="hidden lg:flex absolute top-[20rem] -right-[10rem] "></Notification>
            </ScrollParallax>
               <Gradient></Gradient>
            </div>
          
             <div className='absolute lg:-top-[104%] left-1/2 -translate-x-1/2 w-[234%]  md:w-[138%] -top-[54%] md:-top-[40%]'>
                <img src={heroBackground} alt="" className='w-full'/>
                 
             </div>
               <BackgroundCircles></BackgroundCircles>
               
        </div>
             
    <CompanyLogo className={`relative mt-20 hidden md:block px-3 h-[8.5rem]`}></CompanyLogo>
    </div>
    <BottomLine></BottomLine>
  </Section>
  )
}
