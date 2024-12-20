import React, { useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setnav] = useState(false)
  const handleNav = () => {
    setnav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#543A14]'>
      <h1 className='w-full text-3xl font-bold text-[#D8C4B6]'>Orchestra</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>ORKESTRA</li>
        <li className='p-4'>KONSER</li>
        <li className='p-4'>BERITA</li>
        <li className='p-4'>KONTAK</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={25} />}
       
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#131010] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#D8C4B6] m-5'>Orchestra</h1>
        <ul className='uppercase p-5'>
          <li className='p-4 border-b border-gray-600'>HOME</li>
          <li className='p-4 border-b border-gray-600'>ORKESTRA</li>
          <li className='p-4 border-b border-gray-600'>KONSER</li>
          <li className='p-4 border-b border-gray-600'>BERITA</li>
          <li className='p-4'>KONTAK</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
