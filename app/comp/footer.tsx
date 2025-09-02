import React from 'react'

const Footer = () => {
  return (
    <div className='p-[20px] bg-[#23103a] flex flex-col gap-5'> 
      <div className='w-full grid  grid-cols-1 md:grid-cols-5 gap-[20px]'>
        <div className='col-span-1'>
            <h1 className='text-[30px] text-neutral-500'>Logo</h1>
            <p className="text-neutral-400 text-[15px]" >The world's leading cryptocurrency exchange platform, trusted by millions of traders worldwide.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-[30px] justify-between col-span-4 w-[80%]' >
            <div className='flex flex-col gap-2'>
                <h1 className='text-white font-semibold text-[20px]'>Trading</h1>
                <div className='flex flex-col gap-1'>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white font-semibold text-[20px]'>Trading</h1>
                <div className='flex flex-col gap-1'>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-white font-semibold text-[20px]'>Trading</h1>
                <div className='flex flex-col gap-1'>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                     <nav className='text-neutral-400 text-[15px]'>Spot Trading</nav>
                
                </div>
            </div>
        </div>
      </div>
      <hr className='text-neutral-800' />

      <p className='text-neutral-600'>This is afrer the horizontal rule</p>
    </div>
  )
}

export default Footer
