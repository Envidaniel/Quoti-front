import React from 'react'
import image1 from '../../assets/images/image1.png'
import Header from '../../components/header/Header'
import { InteractiveHoverButtonDemo } from '../../components/shadcn/InteractiveHoverButtonDemo'

const Hero = () => {
  return (
    <div className=''>
        <Header/>
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[200px] md:min-h-[100px]'>
            {/* Text  section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left p-0 py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <h1  className="text-4xl xl:text-5xl font-bold">
            Nous sommes la plus grande  bibliothèque de <span className='text-amber-400'>citations</span> et de résumés de <span className='text-amber-400'>livres</span>  qui existe. 
            </h1>
            <InteractiveHoverButtonDemo/>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <img
              src={image1}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Hero