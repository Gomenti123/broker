import React from 'react'
import Hero from './comp/hero'
import About from './comp/about'
import Faq from './comp/faq'
import Testimony from './comp/testimony'
import Explore from './comp/explore'
import Footer from './comp/footer'
import Header from './comp/header'

const Page = () => {

  return (

    <div className={`bg-[url("../app/comp/imgs/bg1.png")] bg-center text-white`} >
      <Header />
      {/* <Image className='h-[100%] absolute w-full object-cover' src={img} alt='#' /> */}
      <div className='px-5 relative top-[20px] md:px-10'>
         <Hero  />
         
          <Explore />
       
         
      <About />
      <Testimony />
      <Faq />
       <hr className="text-neutral-500" />
        <Footer />
      </div>
     
    </div>
  )
}

export default 
Page
