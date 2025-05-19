import React from 'react'
import Section from './Section'
import { roadmap } from '../constants'
import FeatureCard from './FeatureCard'
import Heading from './Heading'
import Button from './Button'
import { Gradient } from './design/Roadmap'
export default function Feature() {
  return (
   <Section
   crosses  
   >
    <div className='container relative'>
        <Heading tagline={`Ready to get started`}>What we’re working on</Heading>
        <div className='lg:grid grid-cols-2 gap-5 '> 
            {roadmap.map(feature=>(
                <div className='lg:even:translate-y-[7rem] mt-5 lg:mt-0'>
                {feature.colorful ? 
                <div className='bg-conic-gradient p-0.25 rounded-3xl'>
            <FeatureCard title={feature.title} text={feature.text} date={feature.date} status={feature.status} colorful={feature.colorful} imgUrl={feature.imageUrl}></FeatureCard>

                </div> :
            <FeatureCard title={feature.title} text={feature.text} date={feature.date} status={feature.status} colorful={feature.colorful} imgUrl={feature.imageUrl}></FeatureCard>
                
                }
                </div>
     ))}
        </div>
        
        <div>
            
        <Gradient />
        </div>
         <div className="flex justify-center mt-14 md:mt-18 lg:mt-[10rem]">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
     
   </Section >
  )
}
