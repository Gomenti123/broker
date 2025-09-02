import React from 'react'

const Calculator = () => {
  return (
    <div>
      <div className='flex justify-center p-[20px]'>
        <div className='border border-neutral-300 min-h-[500px] rounded-md w-full md:w-[600px] flex flex-col items-center py-[10px] gap-3 '>
<h1 className='font-medium text-[20px]'>Profit Calculator</h1>
<div className='p-3 w-full flex flex-col gap-5'>
    <select className='w-full p-2 bg-neutral-200 outline-none rounded-md h-[50px]'>
         <option value="">Premium Package</option>
         <option value="">Beginner Package</option>
         <option value="">Starter Package</option>
    </select>
    <select className='w-full p-2 bg-neutral-200 outline-none rounded-md h-[50px]'>
         <option value="">Premium Package</option>
         <option value="">Beginner Package</option>
         <option value="">Starter Package</option>
    </select>
    <select className='w-full p-2 bg-neutral-200 outline-none rounded-md h-[50px]'>
         <option value="">Premium Package</option>
         <option value="">Beginner Package</option>
         <option value="">Starter Package</option>
    </select>
    <select className='w-full p-2 bg-neutral-200 outline-none rounded-md h-[50px]'>
         <option value="">Premium Package</option>
         <option value="">Beginner Package</option>
         <option value="">Starter Package</option>
    </select>
    <select className='w-full p-2 bg-neutral-200 outline-none rounded-md h-[50px]'>
         <option value="">Premium Package</option>
         <option value="">Beginner Package</option>
         <option value="">Starter Package</option>
    </select>
   <div className='flex w-full justify-center'>
    <button className='bg-gradient-to-r from-blue-300 to-blue-700 rounded-full p-3 w-[200px] text-white font-medium text-[20px]'>Create Account</button>
   </div>
   
</div>

        </div>
      </div>
    </div>
  )
}

export default Calculator
