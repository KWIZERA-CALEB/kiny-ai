import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
    
//   </StrictMode>,
// )

declare global {
  interface Window {
    ChatbotWidget: {
      render: (selector: string) => void
    }
  }
}


const renderChatbot = (selector: string) => {
    const rootElement = document.querySelector(selector)

    if (rootElement) {
      createRoot(rootElement).render(
        <StrictMode>
          <App />
        </StrictMode>
      )
    }
}

if (typeof window !== 'undefined') {
  window.ChatbotWidget = {
    render: renderChatbot,
  }
}