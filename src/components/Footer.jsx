import Section from './Section'
import { socials } from '../constants'

export default function Footer() {
  return (
    <Section
    crosses
    >
        <div className='container'>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between  items-center'>
                <p className='body-2 text-sm text-n-5'>© 2025. All rights reserved.</p>
            <div className='flex mt-6 sm:mt-0 items-center sm:justify-between sm:ml-auto sm:gap-7 gap-4'>
                {socials.map(icon=>(
                <div className='flex items-center bg-n-6 p-3 rounded-3xl'>
                    <img src={icon.iconUrl} alt="" />
                </div>
            ))}
            </div>
            </div>
        </div>
    </Section>
  )
}
