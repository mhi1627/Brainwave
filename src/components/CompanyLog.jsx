import React from 'react'
import { companyLogos } from '../constants'

export default function CompanyLogo({className}) {
  return (
    <div className={className}>
     <h5 className='tagline text-center text-n-1/50'>Helping people create beautiful content at</h5>
     <ul className='flex mt-[4rem] px-6 gap-3 justify-between items-center'>
      {companyLogos.map(logo=>(
        <li>
          <img src={logo} alt="companylogo" key={logo} width={134} height={28}/>
        </li>
      ))}
     </ul>
    </div>
  )
}
