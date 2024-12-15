import React, { useState } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Button, Dropdown, Space } from "antd";
import { Link as ScrollLink } from 'react-scroll';

const items = [
    {
      label: (
        <div className='flex flex-row space-x-[6px] items-center'>
            <div className='w-[20px] h-[20px] rounded-full'>
                <img src='/images/uk-flag.png' className='w-full h-full object-center object-cover' alt='eng' />
            </div>
            <div>English</div>
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div className='flex flex-row space-x-[6px] items-center'>
            <div className='w-[20px] h-[20px] rounded-full'>
                <img src='/images/rwanda-flag.png' className='w-full h-full object-center object-cover' alt='eng' />
            </div>
            <div>Kinyarwanda</div>
        </div>
      ),
      key: '1',
    },
];


const Navigation = () => {
    const currentPath = useLocation()
  return (
    <div className='bg-[#fff] h-[80px] w-full flex pr-[74px] pl-[74px] flex-row justify-between items-center'>
        <div>
            <p className='font-montserrat font-bold text-dark cursor-pointer'>Kiny AI</p>
        </div>
        <div className='flex flex-row items-center space-x-[29px]'>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'>Integration</p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="pricing" smooth={true}>Pricing</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="about" smooth={true}>About</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="subscribe" smooth={true}>Subscribe</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'>Donate</p></div>
        </div>
        <div className='flex flex-row items-center space-x-[15px]'>
            <div>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <Button onClick={(e) => e.preventDefault()} className='text-primary bg-neutral font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[8px] pl-[8px] pt-[8px] pb-[8px] flex flex-row items-center justify-between'>
                        <div className='flex flex-row space-x-[6px] items-center'>
                            <div className='w-[20px] h-[20px] rounded-full'>
                                <img src='/images/uk-flag.png' className='w-full h-full object-center object-cover' alt='eng' />
                            </div>
                            <div>Eng</div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                            </svg>
                        </div>
                    </Button>
                </Dropdown>
            </div>
            <div>
                <RouterLink to='/login'>
                    <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Log In</Button>
                </RouterLink>
            </div>
        </div>
    </div>
  )
}

export default Navigation
