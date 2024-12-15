import { Button } from "antd";
import { Element } from 'react-scroll';



const PricingSection = () => {
  return (
    <div className='mt-[113px] pr-[74px] pl-[74px]'>
        <div>
            <Element name="pricing">
                <p className="font-inter font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">PRICING</p>
            </Element>
        </div>
        <div className='mt-[6px]'>
            <p className="font-inter font-normal text-[25px] text-center selection:bg-primary/50 selection:text-[#fff]">Simple Pricing. Start Free</p>
        </div>
        <div className='mt-[6px]'>
            <p className="font-inter font-normal text-[15px] text-center selection:bg-primary/50 selection:text-[#fff]">Choose a plan that fits your needs and unlock the full potential of Kinyarwanda AI.</p>
        </div>
        <div className='mt-[14px] flex flex-row space-x-[7px] justify-center w-full'>
            <div>
                <Button className='bg-nuetral text-primary font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Monthly</Button>
            </div>
            <div>
                <Button className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Annually</Button>
            </div>
        </div>
        {/* the pricings cards */}
        <div className='flex flex-row justify-between items-start mt-[38px] w-full space-x-[44px]'>
            {/* single card */}
            <div className='bg-neutral p-[32px] w-[347px] rounded-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full'>
                    <img src="/images/basic-icon.png" className='w-full h-full object-cover object-center' alt="icon-pic-basic" />
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[15px] selection:bg-primary/50 selection:text-[#fff]'>Basic Use</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>For Startups and growing companies</p>
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[25px] selection:bg-primary/50 selection:text-[#fff]'>$0 user</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>per month</p>
                </div>
                <div className='mt-[31px]'>
                    <Button className='bg-primary w-full text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Select Plan</Button>
                </div>
                <div className="border-t-[1px] mt-[20px] border-dotted border-[#00796B]"></div>
                <div className='mt-[20px] flex flex-col space-y-[4px]'>
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
            </div>
            {/* single card */}
            {/* single card */}
            <div className='bg-neutral border-[2px] border-solid border-[#00796B] p-[32px] w-[347px] rounded-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full'>
                    <img src="/images/premium-icon.png" className='w-full h-full object-cover object-center' alt="icon-pic-basic" />
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[15px] selection:bg-primary/50 selection:text-[#fff]'>Premium Use</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>For Startups and growing companies</p>
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[25px] selection:bg-primary/50 selection:text-[#fff]'>$4 user</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>per month</p>
                </div>
                <div className='mt-[31px]'>
                    <Button className='bg-primary w-full text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Select Plan</Button>
                </div>
                <div className="border-t-[1px] mt-[20px] border-dotted border-[#00796B]"></div>
                <div className='mt-[20px] flex flex-col space-y-[4px]'>
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
            </div>
            {/* single card */}
            {/* single card */}
            <div className='bg-neutral p-[32px] w-[347px] rounded-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full'>
                    <img src="/images/fire-icon.png" className='w-full h-full object-cover object-center' alt="icon-pic-basic" />
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[15px] selection:bg-primary/50 selection:text-[#fff]'>Expertise Use</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>For Startups and growing companies</p>
                </div>
                <div className='mt-[31px]'>
                    <p className='font-inter font-normal text-[25px] selection:bg-primary/50 selection:text-[#fff]'>$8 user</p>
                    <p className='font-inter font-normal text-[12px] selection:bg-primary/50 selection:text-[#fff]'>per month</p>
                </div>
                <div className='mt-[31px]'>
                    <Button className='bg-primary w-full text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[30px] pl-[30px] pt-[13px] pb-[13px]'>Select Plan</Button>
                </div>
                <div className="border-t-[1px] mt-[20px] border-dotted border-[#00796B]"></div>
                <div className='mt-[20px] flex flex-col space-y-[4px]'>
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
            </div>
            {/* single card */}
        </div>
        {/* the pricings cards */}
    </div>
  )
}

export default PricingSection
