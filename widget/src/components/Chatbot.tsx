import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

const Chatbot = () => {
  return (
    <div className='relative'>
      <div className='absolute left-0 top-0 bg-white shadow-md w-[400px] h-[450px] rounded-[20px]'>
        <div className='pl-[12px] pr-[12px] pt-[12px] pb-[12px] text-[12px] poppins-regular text-white rounded-[20px] w-full bg-blue-500'>
            Hello
        </div>
        <div className='pl-[12px] pr-[12px] pt-[12px] pb-[12px] text-[12px] poppins-regular text-white rounded-[20px] w-full bg-[#000]'>
            Hello, there how are you?
        </div>
      </div>
      <div className='text-2xl fixed bottom-[20px] right-[20px] z-50 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-sky-500 transition ease-in-out bg-blue-500'>
        <ChatBubbleBottomCenterTextIcon className='size-6 text-white' />
      </div>
    </div>
  )
}

export default Chatbot
