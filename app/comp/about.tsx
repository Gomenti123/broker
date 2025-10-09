"use client"
import Image from 'next/image'
import React from 'react'
import img from "./imgs/01.png"
import { IoMdCheckmarkCircle } from 'react-icons/io'




const About = () => {
  return (
  <div className='pt-10'> 
<div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 md:p-10 gap-10'>
    <div>
        <Image src={img} alt='#' className='w-[500px] h-[500px]' />
    </div>
    <div className='w-full flex flex-col gap-1'> 
        <div className='flex items-center gap-1'>
            <div className='w-[40px] h-[3px] bg-amber-600'></div>
            <p className='text-amber-600 text-[18px] font-semibold'>ABOUT US</p>
        </div>
        <div className='flex flex-col gap-3'>
             <h1 className='text-[25px] md:text-[40px] leading-[30px] md:leading-[50px]'>We Offer Best   <strong className='text-amber-600'>Investment <br /> Solutions</strong> For Your Profit </h1>
        <p className='text-[15px] md:text-[19px]'>There are many variations of investment plans, that when you participate in any, you will make a wooping gain.</p>

        <div className='flex flex-col gap-3'> 
            <div className='flex items-center gap-1'>
                <IoMdCheckmarkCircle className='text-[25px] text-amber-600' />
                <p className='text-[16px]'>Take a look at our round up of the best setup.</p>
            </div>
            <div className='flex items-center gap-1'>
                <IoMdCheckmarkCircle className='text-[25px] text-amber-600' />
                <p className='text-[16px]'>Take a look at our round up of the best setup.</p>
            </div>
            <div className='flex items-center gap-1'>
                <IoMdCheckmarkCircle className='text-[25px] text-amber-600' />
                <p className='text-[16px]'>Take a look at our round up of the best setup.</p>
            </div>
            
        </div>
        </div>
       
       
    </div>
    
</div>
  
  </div>
  )
}

export default About
