import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authservice'
import toast from 'react-hot-toast'
import { Button, Input } from "antd";
import { 
    useForm, Controller 
} from 'react-hook-form'

const LoginPage = () => {
    const navigate = useNavigate()


    const { control, handleSubmit, setValue, formState: {errors, isSubmitting} } = useForm()
    const [position, setPosition] = useState('end');

    const onSubmit = async (data) => {
        try {
            const signInResponse = await loginUser(data)
            console.log(signInResponse)
            
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



  return (
    <div className='w-full flex h-[100vh] flex-row justify-between'>
        <div className='w-[50%] h-full'>
            <img src="/images/login-page-image.png" className='w-full h-full object-cover object-center' alt="signup-image" />
        </div>
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
                        <p className='font-inter text-[15px] font-normal selection:bg-primary/50 selection:text-[#fff]'>WELCOME BACK</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-montserrat font-bold text-dark selection:bg-primary/50 selection:text-[#fff]'>LOGIN INTO ACCOUNT.</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-inter text-start text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>Unlock the richness of Rwanda's heritage with AI-powered insights. Dive into stories,<br></br> poems, and wisdom written in the heart of Kinyarwanda.</p>
                    </div>
                </div>
                <div className='mt-[10px] w-full'>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <Button disabled loading iconPosition={position} className='bg-primary text-[#fff] font-lato font-normal w-full text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[18px] pb-[18px]'>Loading</Button>
                            </div>
                            :
                            <div className='mt-[17px]'>
                                <Button disabled={isSubmitting} loading={isSubmitting} htmlType="submit" className='bg-primary text-[#fff] font-lato font-normal w-full text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[18px] pb-[18px]'>Log In</Button>
                            </div>
                        }
                    </form>
                    <div className='mt-[6px] flex flex-row items-center justify-between'>
                        <p className='font-inter cursor-pointer selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>A new member? <span className='text-primary cursor-pointer hover:underline'><Link to='/register'>Register</Link></span></p>
                        <span className='text-primary font-inter hover:underline cursor-pointer font-semibold text-[12px] selection:bg-primary/50 selection:text-[#fff]'><Link to='/forgot'>Forgot Password</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
