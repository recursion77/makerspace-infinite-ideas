
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-sm text-blue-800 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple to Use, Powerful Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our extension seamlessly integrates into your browsing experience with a clean, intuitive interface.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="feature-number mt-1">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Select Text</h3>
                <p className="text-gray-600">
                  Highlight any text on a webpage that you want to process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="feature-number mt-1">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Extension</h3>
                <p className="text-gray-600">
                  Click on the recursion icon in your browser toolbar.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="feature-number mt-1">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose a Tool</h3>
                <p className="text-gray-600">
                  Select from multiple text processing options based on your needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="feature-number mt-1">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                <p className="text-gray-600">
                  Instantly receive AI-processed results that you can copy, save, or share.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-recursion-blue rounded flex items-center justify-center">
                  <span className="text-white font-bold">r</span>
                </div>
                <span className="font-medium">recursion</span>
                <span className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded">Free</span>
              </div>
              
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">
                  Select text on any webpage to use recursion's features
                </p>
                <div className="flex justify-center my-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 text-recursion-blue" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" 
                            stroke="currentColor" strokeWidth="2" />
                      <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" 
                            stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-sm text-blue-700 font-medium">
                  Select text on a page to begin
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
                  <svg className="h-5 w-5 text-recursion-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm">Paste Text from Clipboard</span>
                </div>
                
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <span className="text-sm block">Generate Quiz</span>
                    <span className="text-xs text-gray-500 block">Create multiple choice questions</span>
                  </div>
                  <span className="text-xs text-gray-400 ml-auto">0/3</span>
                </div>
                
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <span className="text-sm block">Simplify Text</span>
                    <span className="text-xs text-gray-500 block">Convert to easy-to-read bullet points</span>
                  </div>
                  <span className="text-xs text-gray-400 ml-auto">1/3</span>
                </div>
                
                <div className="bg-white p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 cursor-pointer">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 18L6 15H18C19.1046 15 20 14.1046 20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15H6.5" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <span className="text-sm block">Chat About Text</span>
                    <span className="text-xs text-gray-500 block">Ask questions about the content</span>
                  </div>
                  <span className="text-xs text-gray-400 ml-auto">4/5</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">Need more? <a href="#pricing" className="text-recursion-blue">Upgrade to Premium</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
