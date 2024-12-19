import React, { useState } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Button, Dropdown, Space } from "antd";
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../../contexts/languageContext';



const Navigation = () => {
    const { switchLanguage, language, translations } = useLanguage();
    const items = [
        {
          label: (
            <div onClick={() => switchLanguage('en')} className='flex flex-row space-x-[6px] items-center'>
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
            <div onClick={() => switchLanguage('rw')} className='flex flex-row space-x-[6px] items-center'>
                <div className='w-[20px] h-[20px] rounded-full'>
                    <img src='/images/rwanda-flag.png' className='w-full h-full object-center object-cover' alt='eng' />
                </div>
                <div>Kinyarwanda</div>
            </div>
          ),
          key: '1',
        },
    ];
  return (
    <div className='bg-[#fff] h-[50px] w-full flex pr-[20px] pl-[20px] flex-row justify-between items-center md:pr-[74px] md:pl-[74px] md:h-[80px]'>
        <div>
            <p className='font-montserrat font-bold text-dark cursor-pointer'>Kiny AI</p>
        </div>
        <div className='hidden flex-row items-center space-x-[29px] md:flex'>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'>{translations[language].integration_nav_link}</p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="pricing" smooth={true}>{translations[language].pricing}</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="about" smooth={true}>{translations[language].about}</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'><ScrollLink to="subscribe" smooth={true}>{translations[language].subscribe}</ScrollLink></p></div>
            <div><p className='font-inter text-[15px] font-normal cursor-pointer'>{translations[language].donate}</p></div>
        </div>
        <div className='flex flex-row items-center space-x-[15px]'>
            <div>
                <Dropdown menu={{ items }} placement="bottomRight">
                    {language === 'en' ? 
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
                    :
                
                        <Button onClick={(e) => e.preventDefault()} className='text-primary bg-neutral font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[8px] pl-[8px] pt-[8px] pb-[8px] flex flex-row items-center justify-between'>
                            <div className='flex flex-row space-x-[6px] items-center'>
                                <div className='w-[20px] h-[20px] rounded-full'>
                                    <img src='/images/rwanda-flag.png' className='w-full h-full object-center object-cover' alt='eng' />
                                </div>
                                <div>Kiny</div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                </svg>
                            </div>
                        </Button>
                    }
                </Dropdown>
            </div>
            <div>
                <RouterLink to='/login'>
                    <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>{translations[language].login_link}</Button>
                </RouterLink>
            </div>
        </div>
    </div>
  )
}

export default Navigation
