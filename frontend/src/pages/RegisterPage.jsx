import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/authservice'
import { Button, Input } from "antd";
import { 
    useForm, Controller 
} from 'react-hook-form'
import toast from 'react-hot-toast'


const RegisterPage = () => {
    const navigate = useNavigate()
    
    
    const { control, handleSubmit, setValue, formState: {errors, isSubmitting} } = useForm()
    const [position, setPosition] = useState('end');

    const onSubmit = async (data) => {
        try {
            const signUpResponse = await registerUser(data)
            console.log(signUpResponse)
            
        } catch(error) {
            setValue('password', '')
            toast.error("An unexpected error occurred", { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-inter font-semibold text-[12px] cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#CC2B52',
                    padding: '6px 20px', 
                },
            });
        }
    }

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
    <div className='w-full flex h-[100vh] flex-row justify-between'>
        <div className='w-[50%] pt-[32px] pr-[60px] pl-[60px]'>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <p className='font-montserrat font-bold text-dark cursor-pointer'>Kiny AI</p>
                </div>
                <div>
                    <Link to='/'>
                        <p className='font-inter cursor-pointer selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Back Home</p>
                    </Link>
                </div>
            </div>
            <div className='mt-[144px]'>
                <div>
                    <div>
                        <p className='font-inter text-[15px] font-normal selection:bg-primary/50 selection:text-[#fff]'>START FOR FREE</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-montserrat font-bold text-dark selection:bg-primary/50 selection:text-[#fff]'>CREATE NEW ACCOUNT.</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-inter text-start text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>Unlock the richness of Rwanda's heritage with AI-powered insights. Dive into stories,<br></br> poems, and wisdom written in the heart of Kinyarwanda.</p>
                    </div>
                </div>
                <div className='mt-[10px] w-full'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-row justify-between space-x-[4px] items-center w-full'>
                            <div className='w-[50%]'>
                                <Controller 
                                    name="firstName"
                                    control={control}
                                    rules={{ required: 'First Name is required'}}
                                    render={({ field }) => (
                                        <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder='First Name' />
                                    )}
                                />
                                {errors.firstName && (
                                    <p className='font-inter text-start text-[12px] font-normal text-[#FF204E]'>{errors.firstName.message}</p>
                                )}
                            </div>
                            <div className='w-[50%]'>
                                <Controller 
                                    name="secondName"
                                    control={control}
                                    rules={{ required: 'Second Name is required'}}
                                    render={({ field }) => (
                                        <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder='Second Name' />
                                    )}
                                />
                                {errors.secondName && (
                                    <p className='font-inter text-start text-[12px] font-normal text-[#FF204E]'>{errors.secondName.message}</p>
                                )}
                            </div>
                        </div>
                        <Controller 
                            name="email"
                            control={control}
                            rules={{ 
                                required: 'Email is required', 
                                pattern: {
                                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Please enter a valid email address',
                                },
                                }}
                            render={({ field }) => (
                                <div className='mt-[17px]'>
                                    <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder='Email Address' />
                                </div>
                            )}
                        />
                        {errors.email && (
                            <p className='font-inter text-start text-[12px] font-normal text-[#FF204E]'>{errors.email.message}</p>
                        )}
                        <Controller 
                            name="password"
                            control={control}
                            rules={{ required: 'Password is required'}}
                            render={({ field }) => (
                                <div className='mt-[17px]'>
                                    <Input.Password {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder='Password' />
                                </div>
                            )}
                        />
                        {errors.password && (
                            <p className='font-inter text-start text-[12px] font-normal text-[#FF204E]'>{errors.password.message}</p>
                        )}
                        
                        {isSubmitting ? 
                            <div className='mt-[17px]'>
                                <Button disabled loading iconPosition={position} className='bg-primary text-[#fff] font-lato font-normal w-full text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[18px] pb-[18px]'>Creating</Button>
                            </div>
                            :
                            <div className='mt-[17px]'>
                                <Button disabled={isSubmitting} loading={isSubmitting} htmlType="submit" className='bg-primary text-[#fff] font-lato font-normal w-full text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[18px] pb-[18px]'>Create Account</Button>
                            </div>
                        }
                    </form>
                    <div className='mt-[6px]'>
                        <p className='font-inter cursor-pointer selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Not a new member? <span className='text-primary cursor-pointer hover:underline'><Link to='/login'>Log In</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[50%] h-full'>
            <img src="/images/login-page-image.png" className='w-full h-full object-cover object-center' alt="signup-image" />
        </div>
    </div>
    // <div className='bg-white p-[20px] w-full h-[100vh] flex flex-row space-x-[20px]'>
    //     <div className='w-[40%] hidden md:block relative h-full'>
    //         <img src="/images/login-banner.jfif" className='w-full image-effect h-full rounded-[20px] cursor-pointer' alt="Authentication Welcome image" />
    //         <div className='absolute bottom-[20px] z-40 left-[50%] transform -translate-x-1/2'>
    //             <h4 className='poppins text-center select-none text-white'>Explore Kinyarwanda AI with KINY.ai</h4>
    //         </div>
    //         <div className='absolute top-[20px] z-40 left-[50%] transform -translate-x-1/2'>
    //             <Link to={'/'}>
    //                 <button className='poppins text-[12px] bg-[#F1EAFF] pr-[6px] pl-[6px] pt-[3px] pb-[3px] rounded-full'>Back to website</button>
    //             </Link>
    //         </div>
    //     </div>
    //     <div className='w-full md:w-[60%] md:p-[30px] flex justify-center items-center'>
    //         <div className='w-full md:p-[20px]'>
    //             <h3 className='poppins text-slate-500 text-[30px] select-none cursor-pointer'>Create an account</h3>
    //             <p className='poppins text-slate-300 text-[16px] select-none cursor-pointer'>Already have an account? <Link to={'/login'} className='text-blue-500 hover:underline'>Login</Link></p>
    //             <div className='mt-[30px]'>
    //                 <form>
    //                     <div className='flex flex-col space-y-[15px]'>
    //                         <div className='flex flex-row space-x-[15px] w-full'>
    //                             <div className='flex flex-col w-[50%]'>
    //                                 <input onChange={handleFirstNameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !firstName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !firstName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='First Name'/>
    //                                 {error && !firstName && (
    //                                     <span className="text-red-500 poppins text-[10px] select-none font-bold mt-1">
    //                                         First name required
    //                                     </span>
    //                                 )}
    //                             </div>
    //                             <div className='flex flex-col w-[50%]'>
    //                                 <input onChange={handleSecondNameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !secondName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !secondName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Second Name'/>
    //                                 {error && !secondName && (
    //                                     <span className="text-red-500 poppins text-[10px] select-none font-bold mt-1">
    //                                         Second name required
    //                                     </span>
    //                                 )}
    //                             </div>
                                
    //                         </div>
    //                         <div>
    //                             <input onChange={handleUsernameChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !userName ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !userName ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Username' />
    //                             {error && !userName && <span className="text-red-500 poppins text-[10px] select-none font-bold">Username required</span>}
    //                         </div>
    //                         <div>
    //                             <input onChange={handleEmailChange} type="text" className={`pl-[12px] w-full border-solid border-[2px] ${error && !email ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !email ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Email' />
    //                             {error && !email && <span className="text-red-500 poppins text-[10px] select-none font-bold">Email required</span>}
    //                         </div>
    //                         <div>
    //                             <input onChange={handlePasswordChange} type="password" className={`pl-[12px] w-full border-solid border-[2px] ${error && !password ? 'border-red-500' : 'border-gray-400'} pt-[12px] text-[12px] ${error && !password ? 'focus:outline-red-500' : 'focus:outline-blue-500'} poppins-regular text-slate-300 rounded-[20px] pb-[12px]`} placeholder='Password' />
    //                             {error && !password && <span className="text-red-500 poppins text-[10px] select-none font-bold">Password required</span>}
    //                         </div>
    //                         {
    //                             loading ? 
    //                             <div>
    //                                 <button type='button' className='w-full pt-[12px] cursor-not-allowed pb-[12px] bg-blue-500/[50%] outline-0 poppins text-[14px] rounded-[20px] text-white'>Loading</button>
    //                             </div>
    //                         :
    //                             <div>
    //                                 <button type='button' onClick={handleRegister} className='w-full pt-[12px] pb-[12px] bg-blue-500 outline-0 cursor-pointer poppins text-[14px] rounded-[20px] text-white'>Create Account</button>
    //                             </div>
    //                         }
                            
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default RegisterPage
