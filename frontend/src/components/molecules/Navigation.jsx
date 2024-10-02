import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Navigation = () => {
    const currentPath = useLocation()
  return (
    <div className='w-full h-[80px] flex justify-center items-center'>
      <div className='flex flex-row space-x-[60px] items-center'>
        <div>
            <Link to={'/'}>
                <p className={currentPath.pathname === '/' ? 'poppins bg-gradient bg-clip-text text-transparent cursor-pointer' : 'poppins text-gray-500 cursor-pointer'}>Home</p>
            </Link>
        </div>
        <div>
            <Link to={'/blog'}>
                <p className={currentPath.pathname === '/blog' ? 'poppins bg-gradient bg-clip-text text-transparent cursor-pointer' : 'poppins text-gray-500 cursor-pointer'}>Blog</p>
            </Link>
        </div>
        <div><p className='poppins uppercase cursor-pointer font-bold'>Mwalimu.ai</p></div>
        <div>
            <Link to={'/privacy'}>
                <p className={currentPath.pathname === '/privacy' ? 'poppins bg-gradient bg-clip-text text-transparent cursor-pointer' : 'poppins text-gray-500 cursor-pointer'}>Privacy</p>
            </Link>
        </div>
        <div>
            <Link to={'/support'}>
                <p className={currentPath.pathname === '/support' ? 'poppins bg-gradient bg-clip-text text-transparent cursor-pointer' : 'poppins text-gray-500 cursor-pointer'}>Support</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
