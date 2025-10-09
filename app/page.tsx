import React from 'react'
import Hero from './comp/hero'
import About from './comp/about'
import Faq from './comp/faq'

const Page = () => {
  return (
    <div className='px-5 md:px-10'>
      <Hero  />
      <About />
      <Faq />
    </div>
  )
}

export default 
Page
