import React from 'react'
import { CiStar } from 'react-icons/ci'
import { MdStar } from 'react-icons/md'

const Testimony = () => {
  return (
    <div className='pt-5 mt-5'>
      <div className='flex flex-col gap-5 w-full justify-center items-center'>
        <div className='flex gap-1 items-center bg-[#dceaff] text-blue-600 rounded-full px-3 py-1'>
            <CiStar />
            <p className='text-[14px] font-medium'>What Our Traders Say</p>
        </div>
<div className='flex flex-col w-full justify-center items-center'>
     <h1 className='text-[45px] leading-[42px]'>Real Stories, <br /> <strong className='text-amber-600'>Real Results</strong></h1>
        <p className='text-center text-[18px] font-medium'>Don&apos;t just take our word for it. See what our successful traders have to say about their <br /> experience with Emax Signal Trade.</p>
</div>
       

<div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
     
            <div className='col-span-1 bg-white shadow-lg md:w-[200px] w-[150px] h-[100px] rounded-3xl flex flex-col justify-center items-center'>
                <h1 className='text-blue-600 font-semibold text-[30px]'>50,000+</h1>
                <p className='text-neutral-600 font-semibold text-[13px]'>Happy Traders</p>
            </div>
             <div className='col-span-1 bg-white shadow-lg md:w-[200px] w-[150px] h-[100px] rounded-3xl flex flex-col justify-center items-center'>
                <h1 className='text-blue-600 font-semibold text-[30px]'>25,000+</h1>
                <p className='text-neutral-600 font-semibold text-[13px]'>Success Stories</p>
            </div>
             <div className='col-span-1 bg-white shadow-lg md:w-[200px] w-[150px] h-[100px] rounded-3xl flex flex-col justify-center items-center'>
                <h1 className='text-blue-600 font-semibold text-[30px]'>245%</h1>
                <p className='text-neutral-600 font-semibold text-[13px]'>Average Profit</p>
            </div>
             <div className='col-span-1 bg-white shadow-lg md:w-[200px] w-[150px] h-[100px] rounded-3xl flex flex-col justify-center items-center'>
                <h1 className='text-blue-600 font-semibold text-[30px]'>98%</h1>
                <p className='text-neutral-600 font-semibold text-[13px]'>5 Star Reviews</p>
            </div>
            
        
</div>
       
        
      </div>
    </div>
  )
}

export default Testimony
