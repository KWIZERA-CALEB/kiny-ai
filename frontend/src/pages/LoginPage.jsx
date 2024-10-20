import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authservice'
import toast from 'react-hot-toast'

const LoginPage = () => {
    const [username, setUserName] = useState('')
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

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if(!username || !password) {
                setError(true)
                setLoading(false)
                return false
            }
            const data = {
                username: username,
                password: password
            }
            const response = await loginUser(data)
            console.log(response)
            setLoading(false)
            localStorage.setItem('token', response.access)
            localStorage.setItem('refresh', response.refresh)
            setTimeout(() => {
                toast.custom(<div className='bg-green-500 px-4 py-2 text-[12px] rounded-md text-white select-none poppins'>You are logined</div>)
            }, 6000)
            navigate('/chat')
            return response
        } catch(error) {
            console.log(`Error occured ${error}`)
            // console.log(error.response.data.password[0])
            toast.custom(<div className='bg-red-500 px-4 py-2 text-[12px] rounded-md text-white select-none poppins'>{error?.response?.data?.detail || 'An unexpected error occurred.'}</div>)
            setLoading(false)
            setPassword('')
            throw error
        }
    }

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
                                <input type="text" onChange={handleUserNameChange} className={`pl-[12px] w-full border-solid border-[2px] ${error && !username ? 'border-red-500' : 'border-gray-400'} pt-[12px] ${error && !username ? 'focus:outline-red-500' : 'focus:outline-blue-500'} text-[12px] poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Username' />
                                {error && !username && <span className="text-red-500 poppins text-[10px] select-none font-bold">Username required</span>}
                            </div>
                            <div>
                                <input type="password" value={password} onChange={handlePasswordChange} className={`pl-[12px] w-full border-solid border-[2px] ${error && !password ? 'border-red-500' : 'border-gray-400'} pt-[12px] ${error && !password ? 'focus:outline-red-500' : 'focus:outline-blue-500'} text-[12px] poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Password' />
                                {error && !password && <span className="text-red-500 poppins text-[10px] select-none font-bold">Password required</span>}
                            </div>
                            {
                                loading ? 
                                <div>
                                    <button type='button' className='w-full pt-[12px] cursor-not-allowed pb-[12px] bg-blue-500/[50%] outline-0 poppins text-[14px] rounded-[20px] text-white'>Loading</button>
                                </div>
                            :
                                <div>
                                    <button type='button' onClick={handleLogin} className='w-full pt-[12px] pb-[12px] bg-blue-500 outline-0 cursor-pointer poppins text-[14px] rounded-[20px] text-white'>Login</button>
                                </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-[40%] hidden md:block relative h-full'>
            <img src="/images/login-banner.jfif" className='w-full image-effect h-full rounded-[20px] cursor-pointer' alt="Authentication Welcome image" />
            <div className='absolute bottom-[20px] z-40 left-[50%] transform -translate-x-1/2'>
                <h4 className='poppins text-center select-none text-white'>Explore Kinyarwanda AI with KINY.ai</h4>
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
