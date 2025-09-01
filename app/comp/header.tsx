import React from 'react'
//


//border-radius: 16px;
const Header = () => {
  return (
    <div className='fixed h-[60px] w-[100%] flex justify-between items-center p-2 px-[20px] md:px-[40px]' style={{backgroundColor: "#29056178", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", backdropFilter: "blur(5.5px)", WebkitBackdropFilter: "blur(5.5px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}  > 
      <div>Logo</div>
      <div className='hidden md:flex justify-between gap-2 '>
        <nav>Home</nav>
        <nav>Chart</nav>
        <nav>Link</nav>
      </div>
      <div className='flex justify-between gap-2'> 
        <button className='border rounded-md w-[90px] h-[35px]'>Sign Up</button>
        <button className='bg-gradient-to-r from-blue-300 to-blue-700 rounded-md w-[90px] shadow-md h-[35px]'>Login</button>
      </div>
    </div>
  )
}

export default Header
