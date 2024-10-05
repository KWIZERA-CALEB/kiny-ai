import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='bg-white p-[20px] w-full h-[100vh] flex flex-row space-x-[20px]'>
        <div className='w-full md:w-[60%] md:p-[30px] flex justify-center items-center'>
            <div className='w-full md:p-[20px]'>
                <h3 className='poppins text-slate-500 text-[30px] select-none cursor-pointer'>Welcome Again</h3>
                <p className='poppins text-slate-300 text-[16px] select-none cursor-pointer'>Don't have an account? <Link to={'/register'} className='text-blue-500 hover:underline'>Register</Link></p>
                <div className='mt-[30px]'>
                    <form>
                        <div className='flex flex-col space-y-[15px]'>
                            <div>
                                <input type="text" className='pl-[12px] w-full border-solid border-[2px] border-gray-400 pt-[12px] focus:outline-blue-500 text-[12px] poppins-regular text-slate-300 rounded-[20px] pb-[12px]' placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" className='pl-[12px] w-full border-solid border-[2px] border-gray-400 pt-[12px] focus:outline-blue-500 text-[12px] poppins-regular text-slate-300 rounded-[20px] pb-[12px]' placeholder='Password' />
                            </div>
                            <div>
                                <button className='w-full pt-[12px] pb-[12px] bg-blue-500 outline-0 cursor-pointer poppins text-[14px] rounded-[20px] text-white'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-[40%] hidden md:block relative h-full'>
            <img src="/images/login-banner.jfif" className='w-full image-effect h-full rounded-[20px] cursor-pointer' alt="Authentication Welcome image" />
            <div className='absolute bottom-[20px] z-40 left-[50%] transform -translate-x-1/2'>
                <h4 className='poppins text-center select-none text-white'>Explore Kinyarwanda AI with Mwalimu.ai</h4>
            </div>
            <div className='absolute top-[20px] z-40 left-[50%] transform -translate-x-1/2'>
                <Link to={'/'}>
                    <button className='poppins text-[12px] bg-[#F1EAFF] pr-[6px] pl-[6px] pt-[3px] pb-[3px] rounded-full'>Back to website</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
