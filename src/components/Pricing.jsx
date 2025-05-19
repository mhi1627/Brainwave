
import { smallSphere, stars } from '../assets'
import { pricing } from '../constants'
import Heading from './Heading'
import PricingCard from './PricingCard'
import Section from './Section'
import {LeftLine,RightLine} from "./design/Pricing"
export default function Pricing() {
  return (
    <Section>
        <div className='container'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img src={smallSphere} className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"/>
                 <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] '>
                    <img src={stars} alt="" />
                 </div>
            </div>

            <Heading tagline={`Get started with Brainwave`}>Pay once, use forever</Heading>
          <div className=' relative lg:flex gap-5'>
            {pricing.map(card=>(
                <PricingCard title={card.title} description={card.description} price={card.price} features={card.features}></PricingCard>
            ))}
             <LeftLine></LeftLine>
            <RightLine></RightLine>
          </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
        
        </div>
    </Section>
  )
}
