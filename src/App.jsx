import React from 'react'
import Button from './components/Button'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Info from './components/CompanyLog'
import Benifits from './components/Benifits'
import Collaboration from './components/Collaboration'
import CheckInfo from './components/CheckInfo'
import Services from './components/Services'
import Pricing from './components/Pricing'
import PricingCard from './components/PricingCard'
import FeatureCard from './components/FeatureCard'
import Feature from './components/Feature'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
    <Header></Header>
    <Hero></Hero>
    <Benifits></Benifits>
    <Collaboration></Collaboration>
    <Services></Services>
    <Pricing></Pricing>
    <Feature></Feature>
    <Footer></Footer>
    <ButtonGradient></ButtonGradient>
    </div>
  )
}
