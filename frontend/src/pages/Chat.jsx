import React, { useState, useRef, useEffect } from 'react'
import { handleChatMessage } from '../services/chatservice';
import { useNavigate } from 'react-router-dom'
import { userInfo, refreshToken } from '../services/authservice';
import { isTokenExpired } from '../utils/verifytoken';
import { Menu, Divider, Input, Button, Card, Avatar } from 'antd';
import { 
    useForm, Controller 
} from 'react-hook-form'
import toast from 'react-hot-toast'


const menuItems = [
    {
        label: (
          <div>
              <div>Chat</div>
          </div>
        ),
        key: '0',
    },
    {
        label: (
          <div>
              <div>Profile</div>
          </div>
        ),
        key: '1',
    },
    {
        label: (
          <div>
              <div>Integration</div>
          </div>
        ),
        key: '2',
    },
    {
        label: (
          <div>
              <div>Billings and Usage</div>
          </div>
        ),
        key: '3',
    },
];


const Chat = () => {
    const [chatHistory, setChatHistory] = useState([])
    const chatEndRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { control, handleSubmit, setValue, formState: {errors, isSubmitting} } = useForm()
    const [position, setPosition] = useState('end');

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')

        toast.success("Logged Out Successfully", { 
            position: 'bottom-center',
            duration: 5000,            
            className: 'font-inter font-semibold text-[12px] cursor-pointer',
            style: {
                color: '#fff',        
                backgroundColor: '#15B392',
                padding: '6px 20px', 
            },
        });

        navigate('/login')
    }


    const items = [
        {
            label: (
              <div className='flex flex-row space-x-[6px] items-center'>
                  <div className='w-[30px] h-[30px] rounded-full'>
                      <img src='/images/default.png' className='w-full rounded-full h-full object-center object-cover' alt='eng' />
                  </div>
                  <div>{userData.username}</div>
              </div>
            ),
            key: '0',
        },
    ];
    

    const menuSecondItems = [
        {
            label: (
              <div>
                  <div>Docs</div>
              </div>
            ),
            key: '0',
        },
        {
            label: (
              <div>
                  <div>Donate</div>
              </div>
            ),
            key: '1',
        },
        {
            label: (
              <div>
                  <div>Teams</div>
              </div>
            ),
            key: '2',
        },
        {
            label: (
              <div>
                  <div className='text-[#CC2B52]' onClick={handleLogout}>Logout</div>
              </div>
            ),
            key: '3',
        },
    ];
    

    const onSubmit = async (data) => {
        try {
            const newMessage = await handleChatMessage(data);

            // Append user and bot messages to the chat history
            setChatHistory((prev) => [
                ...prev,
                { text: data.message, sender: 'user' },
                { text: newMessage.response, sender: 'bot' },
            ]);

            // Clear input field
            setValue("message", "");
            
        } catch(error) {
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
        const checkAuthToken = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) {
                    navigate('/login')
                }
                

                if (isTokenExpired(token)) {
                    const refresh = localStorage.getItem('refresh')
                    const response = await refreshToken(refresh)

                    if (response.code === 'token_not_valid') {
                        navigate('/login')
                    }

                    if (response) {
                        localStorage.setItem('token', response.access)
                        localStorage.setItem('refresh', response.refresh)
                    }
                }

                
            } catch(error) {
                console.log(`Error occured ${error}`)
                throw error
            }
        }

        checkAuthToken()
    }, [navigate])

    useEffect(() => {
        const handleRefreshToken = async () => {
            try {
                const refresh = localStorage.getItem('refresh')
                const response = await refreshToken(refresh)

                if (response) {
                    localStorage.setItem('token', response.access)
                    localStorage.setItem('refresh', response.refresh)
                }
            } catch(error) {
                console.log(`Error occured ${error}`)
                throw error
            }
        }
        handleRefreshToken()
    }, [])

    useEffect(() => {
        const fetchLoginedUserInfo = async () => {
            try {
                const token = localStorage.getItem('token')
                const user = await userInfo(token)
                setUserData(user)
                return user
            } catch(error) {
                console.log(`Error occured ${error}`)
                throw error
            }
        }
        fetchLoginedUserInfo()
    }, [])


    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const appendedChatHistory = []
    chatHistory.map((chat, index) => (
        appendedChatHistory.push(
            <div key={index} className={`flex flex-row items-center space-x-[4px] ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {chat.sender === 'bot' && 
                    <div className='w-[40px] h-[40px] bg-dark rounded-full'>
                        <img src='/images/chatbot.png' className='w-full h-full rounded-full object-cover object-center' alt='User' />
                    </div>
                }
                <div className={`pl-[12px] pr-[12px] pt-[12px] pb-[12px] text-[12px] font-inter text-white rounded-[20px] ${chat.sender === 'user' ? 'bg-primary' : 'bg-dark'}`}>
                    {chat.text.includes('<img') ? (
                        <div dangerouslySetInnerHTML={{ __html: chat.text }} />
                    ) : (
                        chat.text.split('\n').map((line, index) => (
                            <span key={index} className='font-inter font-semibold text-[12px]'>
                                {line}
                                <br />
                            </span>
                        ))
                    )}
                </div>
                {chat.sender === 'user' && 
                    <div className='w-[40px] h-[40px] rounded-full'>
                        <img src='/images/default.png' className='w-full h-full rounded-full object-cover object-center' alt='User' />
                    </div>
                }
            </div>
        )
    ))
  return (
    <div className='w-full h-[100vh] flex flex-row justify-between'>
        <div className='w-[20%] fixed h-full bg-[#fff]'>
            <div className='overflow-y-scroll w-full h-full flex flex-col justify-between pt-[10px] pb-[10px]'>
                <div>
                    <div className='pr-[20px] pl-[20px]'>
                        <p className='font-montserrat text-[12px] font-bold text-dark cursor-pointer'>✨ KINY.AI</p>
                    </div>
                    <div className='mt-[6px]'>
                        <Menu
                            className='custom-menu w-full'
                            items={menuItems}
                        />
                    </div>
                    <Divider />
                    <div className='mt-[6px]'>
                        <Menu
                            className='custom-menu w-full'
                            items={menuSecondItems}
                        />
                    </div>
                </div>
                <div>
                    <Menu
                        className='custom-menu w-full'
                        mode="inline"
                        items={items}
                    />
                </div>
            </div>
        </div>
        <div className='w-[60%] ml-[20%] mr-[20%] bg-[#fff]'>
            <div className='w-full'>
                {/* scrollable content */}
                <div className='w-full h-auto'>
                    <div className='w-full fixed bg-primary h-[50px] pl-[40px] pr-[40px] flex justify-between items-center'>
                        <div>
                            <p className='font-inter text-[#fff] selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Chat: Kwandika Ibaruwa</p>
                        </div>
                        <div>
                            <p className='font-inter text-[#fff] selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Share | Archive</p>
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-scroll flex flex-col space-y-[6px] pl-[40px] pt-[60px] pb-[60px] pr-[40px]'>
                        {appendedChatHistory}
                        <div ref={chatEndRef} />
                    </div>

                </div>
                {/* scrollable content */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='fixed z-40 bottom-0 pl-[40px] pr-[40px] pt-[6px] pb-[6px] w-full bg-[#fff] flex flex-row space-x-[10px] items-center'>
                        <div>
                            <Controller 
                                name="message"
                                control={control}
                                rules={{ 
                                    required: 'Message is required', 
                                    }}
                                render={({ field }) => (
                                <Input {...field} className='pl-[20px] font-lato pt-[12px] pb-[12px] rounded-full border-solid border-[2px] focus:border-[#00796B] hover:border-[#00796B] border-[#00796B]' 
                                        prefix={
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00796B" width="24" height="24">
                                                <path d="M19.7134 9.12811L19.4668 9.69379C19.2864 10.1079 18.7136 10.1079 18.5331 9.69379L18.2866 9.12811C17.8471 8.11947 17.0555 7.31641 16.0677 6.87708L15.308 6.53922C14.8973 6.35653 14.8973 5.75881 15.308 5.57612L16.0252 5.25714C17.0384 4.80651 17.8442 3.97373 18.2761 2.93083L18.5293 2.31953C18.7058 1.89349 19.2942 1.89349 19.4706 2.31953L19.7238 2.93083C20.1558 3.97373 20.9616 4.80651 21.9748 5.25714L22.6919 5.57612C23.1027 5.75881 23.1027 6.35653 22.6919 6.53922L21.9323 6.87708C20.9445 7.31641 20.1529 8.11947 19.7134 9.12811ZM6 5C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V12H22V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H13V5H6Z"></path>
                                            </svg>
                                    } 
                                    showCount maxLength={100} placeholder='Your Message' />
                                        )}
                            />
                        </div>
                        {isSubmitting ? 
                            <div>
                                <Button disabled loading iconPosition={position} className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[40px] pl-[40px] pt-[25px] pb-[25px]'>Responding ✨</Button>
                            </div>
                            :
                            <div>
                                <Button disabled={isSubmitting} loading={isSubmitting} htmlType="submit" className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[40px] pl-[40px] pt-[25px] pb-[25px]'>Chat ✨</Button>
                            </div>
                        }
                        {errors.message && (
                                <p className='font-inter text-start text-[12px] font-normal text-[#FF204E]'>{errors.message.message}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
        <div className='w-[20%] fixed right-0 top-0 bottom-0 h-full bg-[#fff]'>
            <div className='pr-[20px] pl-[20px] pt-[10px] pb-[10px]'>
                <p className='font-montserrat text-[12px] font-bold text-dark cursor-pointer'>Recent Chats</p>
            </div>
            <div className='w-full pr-[8px] mt-[6px] flex-col space-y-[4px] pl-[8px]'>
                <Card
                    loading={loading}
                    className='p-[-5px] h-[122px]'
                >
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Kinyarwanda niki"
                        description={
                            <>
                                <p>This is the description</p>
                                <p>This is the description</p>
                            </>
                        }
                    />
                </Card>
                <Card
                    loading={loading}
                    className='p-[-5px] h-[122px]'
                >
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Kinyarwanda niki"
                        description={
                            <>
                                <p>This is the description</p>
                                <p>This is the description</p>
                            </>
                        }
                    />
                </Card>
                <Card
                    loading={loading}
                    className='p-[-5px] h-[122px]'
                >
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Kinyarwanda niki"
                        description={
                            <>
                                <p>This is the description</p>
                                <p>This is the description</p>
                            </>
                        }
                    />
                </Card>
                <Card
                    loading={loading}
                    className='p-[-5px] h-[122px]'
                >
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                        title="Kinyarwanda niki"
                        description={
                            <>
                                <p>This is the description</p>
                                <p>This is the description</p>
                            </>
                        }
                    />
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Chat
