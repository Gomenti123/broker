import React from 'react'
import img from "../comp/imgs/bg3.png"
import Image from 'next/image'
const Commission = () => {
  return (
    <div>
         <div className='w-full relative items-center justify-center py-10 md:p-10 gap-10'>
      <div className='flex w-full justify-center'>
        <Image src={img} alt='#' className='w-full md:w-[80%] h-[250px] md:h-[350px] ' />
      </div>
      
      
    </div>
    <div className='relative'>
          <h1>WE OFFER MORE COMMISSION</h1>
        <p>Get 45% Referral Commission </p>
        <p>It is a long established fact that all investors in our platform must benefit from us in another way, just by referring new investors.</p>

<button>GET STARTED</button>
      </div>
    </div>
   
  )
}

export default Commission
