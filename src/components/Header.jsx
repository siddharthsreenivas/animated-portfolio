import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full z-10 py-28 px-20 flex items-center justify-end'>
        <button className='bg-black px-10 py-2 rounded-full border-4 text-xl hover:bg-gray-500'>Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  )
}

export default Header