"use client"
import Image from 'next/image'
import React from 'react'
import {FaArrowRight, FaRegStar } from 'react-icons/fa'
import img from "./imgs/background.jpeg"




const Hero = () => {
  return (
  <div> 

    <div>
        <Image className='w-full h-screen absolute pt-[60px] object-cover' src={img} alt='#' width={100} />

    </div>
    <div className='flex relative justify-center items-center pt-[150px] h-screen text-white'>
        <div className='text-center w-full px-5 lg:w-[70%] flex flex-col gap-7'>
           <div className='flex justify-center w-full'>
             <div className=' flex items-center justify-center  gap-1 border w-[280px] rounded-full p-1'>
                <FaRegStar className='text-[#d08b0d]' />
                <p>#1 Crypto Trading Platform 2025</p>
                
            </div>
           </div>
                
           
           <div>
             <h1 className='text-[30px] lg:text-[50px] text-grad'>Trade Crypto Like a Pro</h1>
            <p className='leading-[29px] text-[20px] text-neutral-400'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias ex libero excepturi magnam, expedita aspernatur eveniet odio fuga neque voluptatibus, laboriosam iusto, aperiam exercitationem asperiores reiciendis possimus sunt autem?</p>
           </div>
           <div className='w-full flex justify-center'> 
            <div className='border border-neutral-300 flex justify-between items-center p-5 w-full md:w-[70%] h-[100px] rounded-[15px]'>
                <div>
                    <p className='text-green-500 font-semibold text-[22px] md:text-[25px]'>$250,000</p>
                    <p className='text-neutral-600 text-[12px]'>Active Traders</p>
                </div>
                <div>
                    <p className='text-[#29b1c0] font-semibold  text-[22px] md:text-[25px]'>$250,000+</p>
                    <p className='text-neutral-600 text-[12px]'>Active Trades</p>
                </div>
                <div>
                    <p className='text-[#ce1cce] font-semibold text-[22px] md:text-[25px]'>$250,000</p>
                    <p className='text-neutral-600 text-[12px]'>Active Traders</p>
                </div>
                
               
            </div>
           </div>

           <div className='flex flex-col md:flex-row w-full items-center justify-center gap-2 md:gap-4'>
            <div className='bg-gradient-to-r from-blue-300 to-[#030356] rounded-md min-w-[170px]  h-[45px] flex items-center gap-2 justify-center'>
                <button className='text-white font-medium' >Start Trading Now</button>
                <FaArrowRight className='text-white' />
            </div>
            
            <button className='border rounded-md min-w-[150px] md:min-w-[170px] h-[45px]'>View Live Demo</button>
           </div>
           
        </div>

       
    </div>
  </div>
  )
}

export default Hero
