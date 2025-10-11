import React from 'react'
import Hero from './comp/hero'
import About from './comp/about'
import Faq from './comp/faq'
import Testimony from './comp/testimony'
import Explore from './comp/explore'

const Page = () => {

  return (

    <div >
      {/* <Image className='h-[100%] absolute w-full object-cover' src={img} alt='#' /> */}
      <div className='px-5 relative top-[20px] md:px-10'>
         <Hero  />
         
          <Explore />
       
         
      <About />
      <Testimony />
      <Faq />
      </div>
     
    </div>
  )
}

export default 
Page
