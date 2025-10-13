import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='block md:hidden'> 
         <DropdownMenu>
  <DropdownMenuTrigger>
    <GiHamburgerMenu className='text-[30px]' />
  </DropdownMenuTrigger>
  <DropdownMenuContent className='mt-[20px] mr-[10px]'>
    <DropdownMenuLabel>
      <h1 className='font-semibold text-[20px]'>Navigations</h1>
      </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link to='Home' smooth={true} duration={500}>Home</Link></DropdownMenuItem>
    <DropdownMenuItem><Link to='About' smooth={true} duration={500}>About Us</Link></DropdownMenuItem>
    <DropdownMenuItem><Link to='Testimonies' smooth={true} duration={500}>Testimonies</Link></DropdownMenuItem>
    <DropdownMenuItem><Link to='FAQs' smooth={true} duration={500}>FAQs</Link></DropdownMenuItem>

    <div>
       <DropdownMenuItem>
        
       </DropdownMenuItem>
        <DropdownMenuItem><Link to='FAQs' smooth={true} duration={500}>FAQs</Link></DropdownMenuItem>
    </div>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default Nav
