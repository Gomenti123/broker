"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'




const Faq = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
  return (
 <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 md:p-10 gap-10'>
    <div className='col-span-1'>
         <div className='flex items-center gap-1'>
            <div className='w-[40px] h-[3px] bg-amber-600'></div>
            <p className='text-amber-600 text-[18px] font-semibold'>FAQ&apos;s</p>
        </div>
        <div className='flex flex-col gap-3'>
            <div>
                 <p className='text-[25px] md:text-[45px] leading-[30px] md:leading-[55px]'>General Frequently  <strong className='text-amber-600'>Asked <br /> Questions</strong></p>
            </div>
            <div>
                 <p className='text-[14px] md:text-[17px]'>There are many variations expectation and uncertainty that might require you to ask.  <br />

some questions for clarification. If the few answers we provided didn&apos;t answer your question, click the below button.</p>
            </div>
        </div>
       
       
    </div>
    <div className='col-span-1 w-full flex flex-col gap-3'>
         <div >
         <div className='bg-blue-900 rounded-md h-[60px] text-white flex justify-between items-center  px-[15px] py-[10px]'>
        <div className='flex items-center gap-1 text-[20px]'>
            <FaQuestionCircle className='text-amber-600' />
             <p>What is Bitcoin ? </p>
        </div>
       
        <IoIosArrowDown onClick={()=>{setShow1(!show1), setShow2(false), setShow3(false)}} />
    </div>
    {show1 ?  <div className=' transition-all  duration-300 px-3 py-1 mt-[-9px] bg-blue-900 rounded-md text-white'>
        <div className='h-[2px] mb-1 bg-amber-700 outline-dotted'></div>
        <p className='pt-1'>Bitcoin is a form of digital currency which is based on an open source code that was created and is held electronically. Bitcoin is a decentralized form of currency, meaning that it does not belong to any form of government and is not controlled by anyone.</p>
    </div>
     : <div className='transition-all  duration-300'></div> }
   
    </div>
     <div>
         <div className='bg-blue-900 h-[60px] rounded-md text-white flex justify-between items-center  px-[15px] py-[10px]'>
        <div className='flex items-center gap-1 text-[20px]'>
            <FaQuestionCircle className='text-amber-600' />
             <p>What is Bitcoin Mining ? </p>
        </div>
       
        <IoIosArrowDown onClick={()=>{setShow2(!show2), setShow1(false), setShow3(false)}} />
    </div>
    {show2 ?  <div className=' transition-all  duration-300 px-3 py-1 mt-[-9px] bg-blue-900 rounded-md text-white'>
        <div className='h-[2px] mb-1 bg-amber-700 outline-dotted'></div>
        <p className='pt-1'>Bitcoin mining is analogous to the mining of gold, but its digital form. The process involves specialized computers solving algorithmic equations or hash functions. These problems help miners to confirm blocks of transactions held within the network. Bitcoin mining provides a reward for miners by paying out in Bitcoin in turn the miners confirm transactions on the blockchain. Miners introduce new Bitcoin into the network and also secure the system with transaction confirmation. They are also rewarded network fees for when they harvest new coin and a time when the last bitcoin is found mining will continue.</p>
    </div>
     : <div className='transition-all  duration-300'></div> }
   
    </div>
     <div>
         <div className='bg-blue-900 h-[60px] rounded-md text-white flex justify-between items-center px-[15px] py-[10px]'>
        <div className='flex items-center gap-1 text-[20px]'>
            <FaQuestionCircle className='text-amber-600' />
             <p>How Can I Sell Bitcoins ? </p>
        </div>
       
        <IoIosArrowDown onClick={()=>{setShow3(!show3), setShow1(false), setShow2(false)}} />
    </div>
    {show3 ?  <div className=' transition-all  duration-300 px-3 py-1 mt-[-9px] bg-blue-900 rounded-md text-white'>
        <div className='h-[2px] mb-1 bg-amber-700 outline-dotted'></div>
        <p className='pt-1'>Bitcoins can be sold locally using LocalBitcoins, on Bitcoin brokerages / exchanges, using two-way Bitcoin Teller Machines (BTM’s) or you can pay for a good or service with them. Bitcoins can be sold to just about anyone as long as they have a Bitcoin address, and can be sold for any fiat currency in the world or traded for a physical good. Feel free to check out our recommended list of exchanges and brokerage services to sell your bitcoins online.</p>
    </div>
     : <div className='transition-all  duration-300'></div> }
   
    </div>
    </div>
 </div>
  )
}

export default Faq
