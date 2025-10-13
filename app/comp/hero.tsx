"use client"
import Image from 'next/image'
import React from 'react'
import img from "./imgs/hero.png"
import { Element } from 'react-scroll'




const Hero = () => {
  return (
  <Element name='Home' className='pt-10'> 
<div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 md:p-10 gap-10'>
    <div className='w-full flex flex-col gap-2 md:gap-1'> 
        <h1 className='text-[18px] md:text-[30px]'>SAFE AND SECURE INVESTMENT </h1>
        <p className='text-[28px] leading-[35px] md:leading-[45px] md:text-[40px] font-semibold'>BEST BITCOIN  INVESTMENT <br /> <strong className='text-amber-600'>SOLUTION</strong>  FOR YOU</p>
        <p className='text-[15px] font-medium'>A Crypto-Currency Web Platform That Secure Wallets, Give Access To  Investment Of Different Packages With Amazing Return.</p>
    </div>
    <div>
        <Image src={img} alt='#' className='w-[350px] h-[350px] md:w-[500px] md:h-[500px]' />
    </div>
</div>
  
  </Element>
  )
}

export default Hero
