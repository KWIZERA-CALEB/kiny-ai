import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';
import '../index.css';

const Chatbot: React.FC = () => {
  return (
    <div className="z-50 chatbot-widget">
      <div className="fixed bottom-[30px] right-[30px]">
        <Button className="bg-primary text-[#fff] font-lato font-normal text-[12px] rounded-full cursor-pointer pr-[40px] pl-[40px] pt-[25px] pb-[25px]">
          KINY AI ✨
        </Button>
      </div>
    </div>
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
