import React, { useState } from 'react'
import brainwave from "../assets/brainwave.svg"
import { navigation } from '../constants'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { useLocation } from 'react-router-dom'
import { HamburgerMenu } from './design/Header'
import { enablePageScroll,disablePageScroll } from 'scroll-lock'
export default function Header() {
  const pathname = useLocation();
  const [openNavigation,setOpenNavigation] = useState(false)

  function toggleNavigation() {
     setOpenNavigation(!openNavigation)
     {openNavigation ? enablePageScroll() : disablePageScroll()}
  }

  function handleClick() {
    if(!openNavigation) return
    enablePageScroll();
    setOpenNavigation(false)

  }

  return (
    <div className={`fixed w-full z-50 top-0 left-0  border-b border-n-6 lg:backdrop-blur-sm lg:bg-n-8/90 ${openNavigation ? 'bg-n-8' : "backdrop-blur-sm bg-n-8/90"}`}>
     <div className= {`flex items-center px-6 lg:px-7.5 xl:px-10 max-lg:py-4 `}>
        <a href="#hero" className='block w-[12rem] xl:mr-8'>
            <img src={brainwave} alt="brainwave" width={190} height={40}/>
        </a>

        <nav className={`${openNavigation?'flex':'hidden'} fixed top-[4rem] left-0 bottom-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
         <div className='z-2 flex flex-col justify-center items-center m-auto lg:flex-row'>
          {navigation.map(nav=>(
            <a href={nav.url} key={nav.id} onClick={handleClick} className={` block relative text-2xl font-code uppercase p-6 md:px-8 lg:text-xs lg:-mr-0.25 text-n-1 lg:font-semibold transition-colors hover:text-n-1 xl:px-12 lg:leading-5  lg:${nav.onlyMobile?'hidden':''} ${nav.url === pathname.hash? 'text-n-1':'text-n-1/50'}` }>{nav.title}</a>
          ))}
         </div>
         <HamburgerMenu></HamburgerMenu>
        </nav>

        <a href="signUp" className='mr-8 hidden lg:block text-n-1/50 hover:text-n-1 transition-colors button'>New Account</a>
        <Button className="hidden lg:flex " href="#login">Login</Button>
        <Button className={`lg:hidden ml-auto`} px={"px-3"} onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation}></MenuSvg>
        </Button>
     </div>
    </div>
  )
}
