import React from 'react'
import Footer from '../components/footer/Footer'
import Hero from '../landing/hero/Hero'
import First from '../landing/first/First'
import Last from '../landing/last/Last'
import Third from '../landing/third/Third'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <First/>
        <Last/>
        <Third/>
        <Footer/>
    </div>
  )
}

export default Landing