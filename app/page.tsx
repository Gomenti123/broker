import React from 'react'
import Hero from './comp/hero'
import About from './comp/about'
import Faq from './comp/faq'

const Page = () => {

  return (

    <div className={`bg-[url("../app/comp/imgs/bg1.png")] bg-center text-white`}>
      {/* <Image className='h-[100%] absolute w-full object-cover' src={img} alt='#' /> */}
      <div className='px-5 relative top-[20px] md:px-10'>
         <Hero  />
      <About />
      <Faq />
      </div>
     
    </div>
  )
}

export default 
Page
