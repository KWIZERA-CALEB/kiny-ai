import React, { useState } from 'react'
import Navigation from '../components/molecules/Navigation'
import { Button, Dialog, Input, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const Welcome = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
  return (
    <div>
        <Navigation />

        <div className='pt-[60px] pb-[60px]'>
            <div className='lg:pr-[260px] lg:pl-[260px] pr-[20px] pl-[20px]'>
                <p className='text-center bg-gradient bg-clip-text text-transparent text-[20px] md:text-[32px] poppins font-bold cursor-pointer select-none'>Discover the modern way to work with Generative AI</p>
            </div>
            <div className='lg:pr-[260px] lg:pl-[260px] mt-[20px] pr-[20px] pl-[20px]'>
                <p className='text-center text-[16px] text-gray-500 poppins cursor-pointer select-none'>Explore a diverse array of styles, colors, and themes within our collection, granting you the power to curate the ideal art piece of your space</p>
            </div>
            <div className='flex mt-[20px] flex-row space-x-[20px] justify-center'>
                <Button className='rounded-full bg-gradient poppins' onClick={handleOpen} variant="gradient">Get Started</Button>
                <Button className='bg-white text-slate-400 poppins border-blue-500 border-solid border-[2px] rounded-full'>Learn More</Button>
            </div>
        </div>

        <Dialog open={open} className='p-[20px]' handler={handleOpen}>
            <div className='flex justify-center'><p className='poppins uppercase text-[18px] cursor-pointer font-bold'>Mwalimu.ai</p></div>
            <div className='w-full mt-[20px]'>
                
            </div>
            <DialogFooter></DialogFooter>
        </Dialog>

      

    </div>
  )
}

export default Welcome
