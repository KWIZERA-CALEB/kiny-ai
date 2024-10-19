import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/authservice'

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/chat')
        }
    }, [])

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleSecondNameChange = (e) => {
        setSecondName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!userName || !email || !password || !firstName || !secondName) {
                setError(true)
                setLoading(false)
                return false
            }

            const data = {
                first_name: firstName,
                last_name: secondName,
                username: userName,
                email: email,
                password: password
            }
            const newUser = await registerUser(data)
            setLoading(false)
            navigate('/login')
            return newUser
        } catch(error) {
            console.log(`Error occured ${error}`)
            setPassword('')
            throw error
        }
    }
  return (
    <div className='bg-white p-[20px] w-full h-[100vh] flex flex-row space-x-[20px]'>
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
        <div className='w-full md:w-[60%] md:p-[30px] flex justify-center items-center'>
            <div className='w-full md:p-[20px]'>
                <h3 className='poppins text-slate-500 text-[30px] select-none cursor-pointer'>Create an account</h3>
                <p className='poppins text-slate-300 text-[16px] select-none cursor-pointer'>Already have an account? <Link to={'/login'} className='text-blue-500 hover:underline'>Login</Link></p>
                <div className='mt-[30px]'>
                    <form>
                        <div className='flex flex-col space-y-[15px]'>
                            <div className='flex flex-row space-x-[15px] w-full'>
                                <div className='flex flex-col w-[50%]'>
                                    <input onChange={handleFirstNameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !firstName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !firstName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='First Name'/>
                                    {error && !firstName && (
                                        <span className="text-red-500 poppins text-[10px] select-none font-bold mt-1">
                                            First name required
                                        </span>
                                    )}
                                </div>
                                <div className='flex flex-col w-[50%]'>
                                    <input onChange={handleSecondNameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !secondName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !secondName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Second Name'/>
                                    {error && !secondName && (
                                        <span className="text-red-500 poppins text-[10px] select-none font-bold mt-1">
                                            Second name required
                                        </span>
                                    )}
                                </div>
                                
                            </div>
                            <div>
                                <input onChange={handleUsernameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !userName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !userName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Username' />
                                {error && !userName && <span className="text-red-500 poppins text-[10px] select-none font-bold">Username required</span>}
                            </div>
                            <div>
                                <input onChange={handleEmailChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !email ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !email ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Email' />
                                {error && !email && <span className="text-red-500 poppins text-[10px] select-none font-bold">Email required</span>}
                            </div>
                            <div>
                                <input onChange={handlePasswordChange} type="password" className={`pl-[12px] w-full border-solid border-[2px] ${error && !password ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !password ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Password' />
                                {error && !password && <span className="text-red-500 poppins text-[10px] select-none font-bold">Password required</span>}
                            </div>
                            {
                                loading ? 
                                <div>
                                    <button type='button' className='w-full pt-[12px] cursor-not-allowed pb-[12px] bg-blue-500/[50%] outline-0 poppins text-[14px] rounded-[20px] text-white'>Loading</button>
                                </div>
                            :
                                <div>
                                    <button type='button' onClick={handleRegister} className='w-full pt-[12px] pb-[12px] bg-blue-500 outline-0 cursor-pointer poppins text-[14px] rounded-[20px] text-white'>Create Account</button>
                                </div>
                            }
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage
