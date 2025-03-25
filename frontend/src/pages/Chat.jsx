import React, { useState, useRef, useEffect } from 'react'
import { handleChatMessage } from '../services/chatservice';
import { useNavigate } from 'react-router-dom'
import { userInfo, refreshToken } from '../services/authservice';
import { isTokenExpired } from '../utils/verifytoken';
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
                if(token) {
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
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className='fixed top-0 left-0 w-full bg-white py-4 px-6 flex justify-between items-center z-50'>
            <p className='text-xl font-bold font-lato'>KINY AI</p>
            <nav className='flex space-x-4'>
                <a href='#' className='text-gray-600 hover:text-primary font-inter'>Home</a>
                <a href='#' className='text-gray-600 hover:text-primary font-inter'>About</a>
                <a href='#' className='text-gray-600 hover:text-primary font-inter'>Contact</a>
            </nav>
        </div>

        <div className='w-[600px] pt-[80px]'>
            <p className='font-lato text-[25px] text-center mb-[20px]'>Hello, Kwizera</p>
            <div className='w-full relative'>
                <textarea placeholder='What do you want to know?' 
                    className='w-full h-[120px] placeholder:text-[16px] border-solid font-inter text-[16px] border-[2px] outline-none focus:border-primary placeholder:font-inter no-resize p-[15px] rounded-[20px] pr-[50px]'>
                </textarea>
                <button className='absolute flex justify-center items-center bottom-[10px] w-[40px] h-[40px] rounded-full p-[10px] right-[10px] bg-primary text-white hover:bg-opacity-80 transition'>
                    ➤
                </button>
            </div>
            <div className='flex flex-row space-x-[10px] mt-[15px] items-center'>
                <div className='border-solid border-gray-300 border-[2px] p-[12px] rounded-[20px] text-[14px] font-inter cursor-pointer'>Health</div>
                <div className='border-solid border-gray-300 border-[2px] p-[12px] rounded-[20px] text-[14px] font-inter cursor-pointer'>Law & Order</div>
                <div className='border-solid border-gray-300 border-[2px] p-[12px] rounded-[20px] text-[14px] font-inter cursor-pointer'>News</div>

            </div>
        </div>
    </div>
  )
}

export default Chat
