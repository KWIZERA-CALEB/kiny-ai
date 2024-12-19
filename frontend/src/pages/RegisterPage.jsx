import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/authservice'
import { Button, Input } from "antd";
import { 
    useForm, Controller 
} from 'react-hook-form'
import toast from 'react-hot-toast'
import { useLanguage } from '../contexts/languageContext';


const RegisterPage = () => {
    const navigate = useNavigate()
    const { language, translations } = useLanguage();
    
    
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
        <div className='w-full pt-[32px] pr-[60px] pl-[60px] md:w-[50%]'>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <p className='font-montserrat font-bold text-dark cursor-pointer'>Kiny AI</p>
                </div>
                <div>
                    <Link to='/'>
                        <p className='font-inter cursor-pointer selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>{translations[language].back_home}</p>
                    </Link>
                </div>
            </div>
            <div className='mt-[144px]'>
                <div>
                    <div>
                        <p className='font-inter text-[15px] font-normal selection:bg-primary/50 selection:text-[#fff]'>{translations[language].start_keyword}</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-montserrat font-bold text-dark selection:bg-primary/50 selection:text-[#fff]'>{translations[language].create_account_heading}</p>
                    </div>
                    <div className='mt-[11px]'>
                        <p className='font-inter text-start text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>{translations[language].create_account_subheading}</p>
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
                                        <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder={translations[language].first_name_placeholder} />
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
                                        <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder={translations[language].second_name_placeholder} />
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
                                    <Input {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder={translations[language].email_placeholder} />
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
                                    <Input.Password {...field} className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder={translations[language].password_placeholder} />
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
                        <p className='font-inter cursor-pointer selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>{translations[language].not_new_member} <span className='text-primary cursor-pointer hover:underline'><Link to='/login'>{translations[language].login_link}</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[50%] hidden h-full md:flex'>
            <img src="/images/login-page-image.png" className='w-full h-full object-cover object-center' alt="signup-image" />
        </div>
    </div>
  )
}

export default RegisterPage
