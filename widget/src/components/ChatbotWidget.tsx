import { createRoot } from 'react-dom/client';
import '../index.css';
import React, { useRef, useEffect, useState, ReactNode  } from 'react';
import { Button, Input } from 'antd';
import { 
  useForm, Controller, SubmitHandler
} from 'react-hook-form'
import toast from 'react-hot-toast'
import { handleChatMessage } from '../services/chatservice';


interface ChatbotProps {
  children?: ReactNode;
}

interface FormFields {
  message: string;
}

interface ChatMessage { 
  text: string; 
  sender: 'user' | 'bot'; 
}

const Chatbot: React.FC<ChatbotProps> = () => {

  const { control, handleSubmit, setValue } = useForm<FormFields>()
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([])
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [minimizeWidget, setMinimizeWidget] = useState(false)

  const handleToggleWidget = () => {
     if (minimizeWidget === true) {
      setMinimizeWidget(false)
     } else if(minimizeWidget === false) {
      setMinimizeWidget(true)
     } else {
      setMinimizeWidget(false)
     }
  }

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
        setValue("message", "");
        const newMessage = await handleChatMessage(data);

        // Append user and bot messages to the chat history
        setChatHistory((prev) => [
            ...prev,
            { text: data.message, sender: 'user' },
            { text: newMessage.response, sender: 'bot' },
        ]);

        // Clear input field
        
        
    } catch(error) {
        setValue("message", "");
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

  const appendedChatHistory = chatHistory.map((chat, index) => (
    <div key={index} className={`flex flex-row items-center space-x-[4px] ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
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
    </div>
  ));
  

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
      scrollToBottom();
  }, [chatHistory]);

  return (
    <>
      <div>
        <div className="z-50 chatbot-widget">
          <div className="fixed bottom-[30px] right-[30px]">

              {minimizeWidget &&
                <div className='w-[350px] overflow-y-scroll absolute rounded-[20px] border-[1px] border-solid border-primary bg-neutral right-0 bottom-[50px] h-[420px]'>
                  <div>
                      <form className='chatbot-widget' onSubmit={handleSubmit(onSubmit)}>
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
                          <div>
                              <Button htmlType="submit" className='bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer hidden pr-[40px] pl-[40px] pt-[25px] pb-[25px]'>Chat ✨</Button>
                          </div>
                      </form>
                      <div className='flex-1 flex flex-col space-y-[6px] pl-[10px] pt-[60px] pb-[60px] pr-[10px]'>
                        {appendedChatHistory}
                        <div ref={chatEndRef} />
                      </div>
                  </div>
                </div>
              }


              <Button onClick={handleToggleWidget} className="bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[40px] pl-[40px] pt-[25px] pb-[25px]">
                KINY AI ✨
              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

class ChatbotWidget {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const root = createRoot(this.container);
    root.render(<Chatbot />);
  }
}

if (typeof window !== 'undefined') {
  console.log('Exposing ChatbotWidget to window');
  (window as any).ChatbotWidget = ChatbotWidget;
}

export default ChatbotWidget;
