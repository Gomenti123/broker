import Image from 'next/image'
import React from 'react'
import img from "@/app/comp/imgs/logo.png"
import Link from 'next/link'

const Signup = () => {
  return (
  <div className='flex w-full px-[20px] justify-center h-screen items-center'>
    <div className='flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3'>
        <div className='w-full flex justify-center items-center'>
            <Image src={img} alt='#' className='text-center w-[90px] h-[60px]' />
        </div>
        
        
         <form className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
                <label className='text-[13px] font-semibold'>Full  Name</label>
                <input type="text" className='rounded-md p-2 bg-[#16077F]' placeholder='E.g: John Doe' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[13px] font-semibold'>Phone Number</label>
                <input type="text" className='rounded-md p-2 bg-[#16077F]' placeholder='+123456789' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[13px] font-semibold'>Bitcoin Address</label>
                <input type="text" className='rounded-md p-2 bg-[#16077F]' placeholder='E.g: oweinskldjnowi ' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[13px] font-semibold'>Email Address</label>
                <input type="text" className='rounded-md p-2 bg-[#16077F]' placeholder='johndoe@gmail.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-[13px] font-semibold'>Password</label>
                <input type="text" className='rounded-md p-2 bg-[#16077F]' placeholder='Your Password' />
            </div>
            

            <button className='bg-gradient-to-r from-amber-600 to-amber-500 p-2 rounded-full text-white text-[20px]'>
                Register
            </button>
         </form>
         <div className='flex items-center gap-1 w-full justify-center text-[12px]'>
            <p>Already have an account? </p>
            <Link href={"/login"} className='italic underline text-blue-400' >Login</Link>
         </div>
         
    </div>
   
  </div>
  )
}

export default Signup
