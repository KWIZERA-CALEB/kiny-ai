import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { handleChatMessage } from '../services/chatservice';


const Chat = () => {
    const [message, setMessage] = useState('')

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const sendChatMessage = async (e) => {
        e.preventDefault()
        try {
            const data = {
                message
            }

            const newMessage = await handleChatMessage(data)
            setMessage('')
            return newMessage

        } catch(error) {
            console.log(error)
            throw error
        }
    }
  return (
    <div className='flex w-full'>
        <div className='w-[80px] hidden md:block fixed border-r p-[10px] border-solid border-gray-300 h-[100vh] poppins'>Sidebar</div>
        <div className='h-[100vh] poppins relative flex-1 md:ml-[80px]'>
            <div className='border-t border-solid pt-[20px] mb-[20px] border-gray-300 h-[150px] absolute bottom-0 w-full flex items-center justify-center'>
                <form action="">
                    <div>
                        <form>
                            <textarea className='w-[400px] h-[70px] border-solid border-gray-300 border-[1px] poppins-regular text-[14px] p-[20px] rounded-[15px]' onChange={handleMessageChange} placeholder='Andika ikibazo'></textarea>
                            <div>
                                <Button type='submit' onClick={sendChatMessage} className='rounded-full'>Send</Button>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Chat
