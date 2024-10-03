import React from 'react'
import { Button } from "@material-tailwind/react";


const Chat = () => {
  return (
    <div className='flex w-full'>
        <div className='w-[80px] hidden md:block fixed border-r p-[10px] border-solid border-gray-300 h-[100vh] poppins'>Sidebar</div>
        <div className='h-[100vh] poppins relative flex-1 md:ml-[80px]'>
            <div className='border-t border-solid pt-[20px] mb-[20px] border-gray-300 h-[150px] absolute bottom-0 w-full flex items-center justify-center'>
                <form action="">
                    <div className='relative'>
                        <textarea className='w-[400px] h-[70px] border-solid border-gray-300 border-[1px] poppins-regular text-[14px] p-[20px] rounded-[15px]' placeholder='Andika ikibazo'></textarea>
                        <div className='absolute right-0'>
                            <Button className='rounded-full'>Send</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
