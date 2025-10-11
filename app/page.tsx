import React from 'react'
import Hero from './comp/hero'
import About from './comp/about'
import Faq from './comp/faq'
import Commission from './comp/commission'
import Testimony from './comp/testimony'

const Page = () => {

  return (

    <div >
      {/* <Image className='h-[100%] absolute w-full object-cover' src={img} alt='#' /> */}
      <div className='px-5 relative top-[20px] md:px-10'>
         <Hero  />
         
          <Commission />
       
         
      <About />
      <Testimony />
      <Faq />
      </div>
     
    </div>
  )
}

export default 
Page
