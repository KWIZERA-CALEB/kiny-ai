import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

const Chatbot = () => {
  return (
    <div className='text-2xl fixed bottom-[20px] right-[20px] z-50 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-sky-500 transition ease-in-out bg-blue-500'>
      <ChatBubbleBottomCenterTextIcon className='size-6 text-white' />
    </div>
  )
}

export default Chatbot
