import { useRef, useEffect } from 'react';

const App = () => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('Checking if ChatbotWidget is available', (window as any).ChatbotWidget);
    if (widgetContainerRef.current && (window as any).ChatbotWidget) {
      console.log('ChatbotWidget found, initializing');
      const widget = new (window as any).ChatbotWidget(widgetContainerRef.current);
      widget.render();
    } else {
      console.log('ChatbotWidget not found');
    }
  }, []);

  return (
      <div>
          <div ref={widgetContainerRef}></div>
      </div>
  );
};

export default App;
