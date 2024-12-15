import React, { useState, useEffect } from 'react'
import Navigation from '../components/molecules/Navigation'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Collapse } from "antd";
import PricingSection from '../components/molecules/PricingSection';
import Footer from '../components/molecules/Footer';
import { Element } from 'react-scroll';

const text = `
  Explore how AI bridges the past and the future by celebrating Kinyarwanda 
  literature. Our platform preserves Rwanda's rich linguistic and cultural heritage while 
  empowering learners and creators.
   Together, we make tradition accessible to inspire the next generation.
`;
const items = [
  {
    key: '1',
    label: <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Is there a free plan</p>,
    children: <p className='font-inter selection:bg-primary/50 selection:text-[#fff]  font-normal text-[12px]'>{text}</p>,
  },
  {
    key: '2',
    label: <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>How much is the Expertise plan</p>,
    children: <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-normal text-[12px]'>{text}</p>,
  },
  {
    key: '3',
    label: <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Does Kiny AI work</p>,
    children: <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-normal text-[12px]'>{text}</p>,
  },
  {
    key: '4',
    label: <p className='font-inter selection:bg-primary/50 selection:text-[#fff]  font-semibold text-[12px]'>How to setup 2 factor Authentication</p>,
    children: <p className='font-inter  selection:bg-primary/50 selection:text-[#fff] font-normal text-[12px]'>{text}</p>,
  },
];

const Welcome = () => {

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/chat')
        }
    }, [])

    const onChange = (key) => {
        console.log(key);
    };
    
  return (
    <div>
        <Navigation />

        <div className='w-full pt-[60px] pb-[60px]'>
            <div className="bg-[url('/images/banner-bg-cover.png')] bg-cover bg-center">
                <div>
                    <p className='font-normal text-center text-[32px] font-irish selection:bg-primary/50 selection:text-[#fff]'>Kinyarwanda LLM</p>
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[30px] text-center selection:bg-primary/50 selection:text-[#fff]'>Discover the beauty of Kinyarwanda<br></br> literature</p>
                </div>
                <div className='mt-[16px]'>
                    <p className='font-lato font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]'>Unlock the richness of Rwanda's heritage with AI-powered insights. Dive into stories,<br></br> poems, and wisdom written in the heart of Kinyarwanda.</p>
                </div>
                <div className='mt-[33px] w-full flex justify-center'>
                    <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Launch App</Button>
                </div>
            </div>
            <div className='mt-[32px] w-full flex justify-center'>
                <img src="/images/ai-banner.png" className='w-[500px]' alt="Banner image" />
            </div>
        </div>

        <div className='w-full mt-[105px] flex flex-row pr-[74px] pl-[74px] justify-between'>
            <div className='w-[50%]'>
                <img src="/images/vr-pic.png" className='w-full' alt="VR image" />
            </div>
            <div className='w-[50%]'>
                <div>
                    <Element name="about">
                        <p className='font-inter font-normal text-[15px] selection:bg-primary/50 selection:text-[#fff] text-start'>ABOUT KINY AI</p>
                    </Element>
                </div>
                <div className='mt-[6px]'>
                    <p className='font-inter font-normal text-[25px] selection:bg-primary/50 selection:text-[#fff] text-start'>Bringing Knowledge to Life with the Power of AI</p>
                </div>
                <div className='mt-[9px]'>
                    <p className='font-lato font-normal text-[15px] selection:bg-primary/50 selection:text-[#fff] text-start'>Explore how AI bridges the past and the future by celebrating Kinyarwanda literature. Our platform preserves Rwanda's rich linguistic and cultural heritage while empowering learners and creators. Together, we make tradition accessible to inspire the next generation.</p>
                </div>
                <div className='mt-[23px] flex flex-col space-y-[4px]'>
                    <div className='flex flex-row space-x-[4px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                        </svg>
                        <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>Kinyarwanda Chatbot</p>
                    </div>
                    <div className='flex flex-row space-x-[4px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                        </svg>
                        <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>Integration in other sites</p>
                    </div>
                    <div className='flex flex-row space-x-[4px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                        </svg>
                        <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>Voice Assistants and Translation</p>
                    </div>
                </div>
                {/* button launch */}
                <div className='mt-[14px]'>
                    <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Launch App</Button>
                </div>
                {/* button launch */}
            </div>
        </div>

        <PricingSection />

        <div className='mt-[54px] w-full pr-[74px] pl-[74px] pt-[43px] pb-[43px] bg-primary'>
            <div>
                <div>
                    <p className="font-inter font-normal text-[#fff] text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">FEATURES</p>
                </div>
                <div className='mt-[6px]'>
                    <p className="font-inter font-normal text-[#fff] text-[25px] text-center selection:bg-primary/50 selection:text-[#fff]">Experience Kiny AI Features.</p>
                </div>
            </div>
            <div className='mt-[30px] flex flex-row justify-center space-x-[47px]'>
                {/* feature one */}
                <div className='bg-[#fff] rounded-[20px] p-[25px]'>
                    <div className='w-full flex justify-center'>
                        <img src="/images/chatbot.png" className='w-[90px]' alt="feature-img" />
                    </div>
                    <div className='mt-[25px]'>
                        <div>
                            <p className='font-bold font-lato text-[15px] cursor-pointer selection:bg-primary/50 selection:text-[#fff]'>Basic Chatbot messaging</p>
                        </div>
                        <div className='mt-[13px]'>
                            <p className='text-start font-lato text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>Choose a plan that fits your needs and unlock the<br></br> full potential of Kinyarwanda AI.</p>
                        </div>
                    </div>
                </div>
                {/* feature one */}
                {/* feature one */}
                <div className='bg-[#fff] rounded-[20px] p-[25px]'>
                    <div className='w-full flex justify-center'>
                        <img src="/images/widget-icon.png" className='w-[65px]' alt="feature-img" />
                    </div>
                    <div className='mt-[25px]'>
                        <div>
                            <p className='font-bold font-lato text-[15px] cursor-pointer selection:bg-primary/50 selection:text-[#fff]'>Widget Integration</p>
                        </div>
                        <div className='mt-[13px]'>
                            <p className='text-start font-lato text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>Choose a plan that fits your needs and unlock the<br></br> full potential of Kinyarwanda AI.</p>
                        </div>
                    </div>
                </div>
                {/* feature one */}
                {/* feature one */}
                <div className='bg-[#fff] rounded-[20px] p-[25px]'>
                    <div className='w-full flex justify-center'>
                        <img src="/images/voice-icon.png" className='w-[63px]' alt="feature-img" />
                    </div>
                    <div className='mt-[25px]'>
                        <div>
                            <p className='font-bold font-lato text-[15px] cursor-pointer selection:bg-primary/50 selection:text-[#fff]'>Voice Assistant</p>
                        </div>
                        <div className='mt-[13px]'>
                            <p className='text-start font-lato text-[12px] font-normal selection:bg-primary/50 selection:text-[#fff]'>Choose a plan that fits your needs and unlock the<br></br> full potential of Kinyarwanda AI.</p>
                        </div>
                    </div>
                </div>
                {/* feature one */}
            </div>
        </div>

        {/* newsletter */}
        <div className='w-full mt-[54px]'>
            <div>
                <Element name="subscribe">
                    <p className="font-inter font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">NEWS LETTER</p>
                </Element>
            </div>
            <div className='mt-[6px]'>
                <p className="font-inter font-normal text-[25px] text-center selection:bg-primary/50 selection:text-[#fff]">Subscribe to News Letter</p>
            </div>
            <div className='mt-[6px]'>
                <p className="font-inter font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">Stay connected! Get the latest updates, features, and insights<br></br> about Kinyarwanda AI delivered straight to your inbox.</p>
            </div>
            <div className='mt-[31px] flex justify-center'>
                <div>
                    <div className='w-[350px]'>
                        <Input className='pl-[20px] font-lato w-full pt-[12px] pb-[12px] rounded-[15px] border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#FAF9F8]' placeholder='Your Email Address' />
                    </div>
                    <div className='mt-[10px] flex justify-center'>
                        <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full mt-[54px] pr-[74px] pl-[74px]'>
            <div>
                <p className="font-inter font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div className='mt-[34px] w-full flex justify-center'>
                <Collapse accordion expandIconPosition="right" ghost items={items} className='w-full' defaultActiveKey={['1']} onChange={onChange} />
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default Welcome
