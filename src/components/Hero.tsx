
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [showRecursionPopup, setShowRecursionPopup] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation sequence
    const startAnimation = async () => {
      if (!textRef.current || !cursorRef.current) return;
      
      const paragraph = textRef.current;
      const cursor = cursorRef.current;
      
      // Position cursor at the start of the paragraph
      const rect = paragraph.getBoundingClientRect();
      cursor.style.opacity = '1';
      cursor.style.left = `${rect.left}px`;
      cursor.style.top = `${rect.top + 2}px`;
      
      // Wait before starting selection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Animate cursor moving to the end of the paragraph
      cursor.style.transition = 'left 2s linear, top 0.5s ease-out';
      cursor.style.left = `${rect.left + paragraph.offsetWidth * 0.93}px`;
      
      // Create and animate a selection background
      const selection = document.createElement('div');
      selection.className = 'absolute bg-blue-200 opacity-50 z-0';
      selection.style.left = `${rect.left}px`;
      selection.style.top = `${rect.top}px`;
      selection.style.height = `${paragraph.offsetHeight}px`;
      selection.style.width = '0';
      paragraph.parentElement?.appendChild(selection);
      
      // Animate the selection width
      selection.style.transition = 'width 2s linear';
      selection.style.width = `${paragraph.offsetWidth * 0.93}px`;
      
      // Show the popup after selection completes
      setTimeout(() => {
        setShowRecursionPopup(true);
        // Remove the cursor after selection is done
        setTimeout(() => {
          cursor.style.opacity = '0';
        }, 500);
      }, 2000);
    };
    
    // Start animation after a short delay
    const timer = setTimeout(() => {
      startAnimation();
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-block px-3 py-1 bg-blue-100 text-sm text-blue-800 rounded-full mb-6">
        Available for Chrome, Firefox, and Edge
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
        Simplify Complex Text with<br /> AI-Powered Tools
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Select text on any webpage to summarize, simplify, generate quizzes, 
        and chat about the content – all in one powerful browser extension.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Button className="recursion-button py-6 px-8 text-lg font-semibold w-full sm:w-auto flex items-center justify-center">
          Install Free Extension <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" className="py-6 px-8 text-lg w-full sm:w-auto">
          Learn More
        </Button>
      </div>
      
      {/* Browser mockup */}
      <div className="max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden bg-gray-100 relative">
        {/* Browser chrome/toolbar */}
        <div className="bg-[#2D2D2D] text-gray-300 p-2 flex items-center space-x-2">
          {/* Traffic lights */}
          <div className="flex space-x-1.5 mr-2">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex space-x-2 mr-3">
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          
          {/* URL bar */}
          <div className="flex-1 bg-[#444444] rounded px-3 py-1 text-sm text-gray-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <span>en.wikipedia.org/wiki/Lorem_ipsum</span>
          </div>
          
          {/* Browser actions */}
          <div className="flex space-x-2 ml-3">
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Browser content */}
        <div className="bg-white p-6 relative">
          <div className="flex">
            <div className="flex-1 pr-4">
              {/* Page title */}
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-gray-200 rounded mr-2"></div>
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
              </div>
              
              {/* Wikipedia-style header */}
              <div className="text-sm text-gray-500 mb-3">From Wikipedia, the free encyclopedia</div>
              
              {/* Page content */}
              <div className="space-y-3 mb-4">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-11/12"></div>
              </div>
              
              {/* Lorem ipsum text with highlight - this is what gets selected */}
              <div className="mb-4 relative">
                <div className="bg-blue-100 p-4 rounded mb-3">
                  <p ref={textRef} className="text-gray-700 text-sm mb-2 text-left relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies 
                    magna in tincidunt ultrices, nisi nunc malesuada erat, vel dictum nisl elit ac purus. Praesent 
                    vel ut metus.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            
            {/* Cursor element */}
            <div 
              ref={cursorRef} 
              className="absolute w-3 h-5 bg-black opacity-0 z-20"
              style={{
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: 'none'
              }}
            />
            
            {/* Recursion popup - only shows after selection */}
            {showRecursionPopup && (
              <div className="w-72 bg-white shadow-xl rounded-lg border overflow-hidden animate-fade-in">
                <div className="p-4 bg-white border-b flex items-center space-x-2">
                  <div className="w-6 h-6 bg-recursion-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">R</span>
                  </div>
                  <span className="font-medium text-gray-900">Recursion</span>
                  <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded">Free</span>
                </div>
                
                <div className="p-4">
                  <p className="text-xs text-gray-600 mb-3">
                    Select text on any webpage to use recursion's features
                  </p>
                  
                  <div className="bg-green-100 rounded-md p-3 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Text Selected</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100">
                      <input type="radio" checked className="h-4 w-4 text-recursion-blue mr-2" />
                      <span className="text-sm font-medium">Summarize</span>
                    </div>
                    
                    <div className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100">
                      <input type="radio" className="h-4 w-4 text-recursion-blue mr-2" />
                      <span className="text-sm">Simplify</span>
                    </div>
                    
                    <div className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100">
                      <input type="radio" className="h-4 w-4 text-recursion-blue mr-2" />
                      <span className="text-sm">Quiz Me</span>
                    </div>
                    
                    <div className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100">
                      <input type="radio" className="h-4 w-4 text-recursion-blue mr-2" />
                      <span className="text-sm">Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-16 mt-12">
        <div className="text-center">
          <div className="feature-number mx-auto">1</div>
          <p className="text-sm mt-2">Select Text</p>
        </div>
        <div className="text-center">
          <div className="feature-number mx-auto">2</div>
          <p className="text-sm mt-2">Open Extension</p>
        </div>
        <div className="text-center">
          <div className="feature-number mx-auto">3</div>
          <p className="text-sm mt-2">Choose Action</p>
        </div>
        <div className="text-center">
          <div className="feature-number mx-auto">4</div>
          <p className="text-sm mt-2">Get Results</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
