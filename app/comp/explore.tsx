"use client"
import React from 'react'
import img from "../comp/imgs/bg3.png"
import Image from 'next/image'
import { Element } from 'react-scroll'
const Explore = () => {
  return (
    <Element name='Explore' className='w-full  py-10 md:p-10 gap-10'>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-1'>
             <h1 className='text-amber-600 text-[40px] leading-[40px] font-semibold'>Explore All <br /> Our Products </h1>
          <p className='text-white text-[20px] leading-[25px]'>Invest in cash Products, trade with leveraged products or let the experts manage your money.</p>
          </div>
         

          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-3 gap-5'>
            <div className='md:w-[200px]  flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-amber-800 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>FX</div>
              <div className='font-semibold text-[15px]'>Forex</div>
            </div>
            <div className='md:w-[200px] flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-blue-800 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>BTC</div>
              <div className='font-semibold text-[15px]'>Bitcoin</div>
            </div>
            <div className='md:w-[200px] flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-green-400 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>ETH</div>
              <div className='font-semibold text-[15px]'>Ethereum</div>
            </div>
            <div className='md:w-[200px] flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-gray-600 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>BO</div>
              <div className='font-semibold text-[15px]'>Bonds</div>
            </div>
            <div className='md:w-[200px] flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-pink-400 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>MF</div>
              <div className='font-semibold text-[15px]'>Mutual Funds</div>
            </div>
            <div className='md:w-[200px] hidden md:flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-yellow-600 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>FU</div>
              <div className='font-semibold text-[15px]'>Futures</div>
            </div>
            <div className='md:w-[200px] hidden md:flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-neutral-500 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>COM</div>
              <div className='font-semibold text-[15px]'>Commodities</div>
            </div>
            <div className='md:w-[200px] hidden md:flex gap-2 items-center h-[50px] bg-white px-4 py-2 rounded-lg text-black'>
              <div className='bg-orange-400 rounded-lg flex items-center justify-center text-[13px] p-1 min-w-[30px] text-white font-semibold h-[30px]'>CDF</div>
              <div className='font-semibold text-[15px]'>CDFs</div>
            </div>
            
           
           
          </div>
        </div>
    </Element>
   
  )
}

export default Explore
