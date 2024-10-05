import React, { useState, useRef, useEffect } from 'react'
import { handleChatMessage } from '../services/chatservice';
import { Button, Dialog, Input, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";


const Chat = () => {
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [chatHistory, setChatHistory] = useState([])
    const handleOpen = () => setOpen(!open)
    const chatEndRef = useRef(null);

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
            setChatHistory([...chatHistory, { text: message, sender: 'user' }])

            setChatHistory(prev => [...prev, { text: newMessage.response, sender: 'bot' }])
            setMessage('')

            scrollToBottom();
            

        } catch(error) {
            console.log(error)
            throw error
        }
    }

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const appendedChatHistory = []
    chatHistory.map((chat, index) => (
        appendedChatHistory.push(
            <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`pl-[12px] pr-[12px] pt-[12px] pb-[12px] text-[12px] poppins-regular text-white rounded-[20px] ${chat.sender === 'user' ? 'bg-blue-500' : 'bg-black'}`}><p>{chat.text}</p></div>
            </div>
        )
    ))
  return (
    <>
        <div className='flex w-full'>
            <div className='w-[60px] hidden fixed bottom-0 border-r md:flex flex-col justify-between p-[10px] border-solid bg-gray-300 h-[100vh] poppins'>
                <div className='flex flex-col space-y-[4px]'>
                    <div className='text-white bg-blue-500 cursor-pointer rounded-full flex justify-center items-center w-[40px] h-[40px] poppins'><p>M</p></div>
                    <div title='New Chat' className='text-white bg-black cursor-pointer rounded-full flex justify-center items-center w-[40px] h-[40px] poppins'><p>+</p></div>
                </div>
                <div title='Kwizera Caleb' onClick={handleOpen}>
                    <img src="/images/default.png" className='w-[40px] h-[40px] rounded-full object-cover object-center cursor-pointer' alt="Profile Image" />
                </div>
            </div>
            <div className='poppins flex-1 md:ml-[60px]'>
                <div className='w-full h-full flex justify-center p-[30px]'>
                    <div className='w-[600px] flex flex-col space-y-[6px]'>
                        {appendedChatHistory}
                        <div ref={chatEndRef} />
                    </div>
                </div>
                <div className='fixed bottom-0 z-50 bg-white items-center flex shadow-2xl justify-center w-full min-h-[120px]'>
                    <form>
                        <div className='flex flex-row justify-between space-x-[15px] p-[20px] w-[600px]'>
                            <textarea spellcheck="false" value={message} autocorrect="off" placeholder='Andika Ikibazo' onChange={handleMessageChange} className='flex-1 overflow-y-hidden pl-[12px] w-full border-solid border-[1px] border-gray-400 pt-[12px] focus:outline-blue-500 poppins-regular text-[12px] text-slate-300 rounded-[10px] pb-[12px]'></textarea>
                            {message === '' ? 
                                <Button onClick={sendChatMessage} disabled className='pr-[12px] disabled pl-[12px] pt-[3px] pb-[3px] h-[40px] bg-blue-500 outline-0 cursor-pointer poppins text-[12px] rounded-[6px] text-white'>Send</Button>
                                :
                                <Button onClick={sendChatMessage} className='pr-[12px] pl-[12px] pt-[3px] pb-[3px] h-[40px] bg-blue-500 outline-0 cursor-pointer poppins text-[12px] rounded-[6px] text-white'>Send</Button>
                                
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Dialog open={open} handler={handleOpen}>
            <div className='w-full h-[120px] rounded-b-full relative flex justify-center mb-[30px] bg-blue-500'>
                <h3 className='poppins text-white select-none curso-pointer absolute bottom-[20px] text-[25px]'>Hello Caleb</h3>
            </div>
        </Dialog>
    </>
  )
}

export default Chat
