
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gray-100 p-1 flex items-center space-x-1">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          <div className="text-gray-500 text-xs ml-2">example.com/article</div>
        </div>
        
        <div className="p-6 relative">
          <div className="flex">
            <div className="flex-1 pr-4">
              <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
              <p className="text-gray-700 text-sm mb-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies 
                magna in tincidunt ultrices, nisi nunc malesuada erat, vel dictum nisl elit ac purus. Praesent 
                vel ut metus.
              </p>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
            
            <div className="w-64 bg-white shadow-lg rounded-lg border overflow-hidden">
              <div className="p-4 bg-gray-50 border-b flex items-center space-x-2">
                <div className="w-6 h-6 bg-recursion-blue rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">R</span>
                </div>
                <span className="font-medium">Recursion</span>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <input type="radio" className="h-4 w-4 text-recursion-blue" checked />
                    <span className="text-sm font-medium">Summarize</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-1">
                    <input type="radio" className="h-4 w-4 text-recursion-blue" />
                    <span className="text-sm">Simplify</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-1">
                    <input type="radio" className="h-4 w-4 text-recursion-blue" />
                    <span className="text-sm">Quiz Me</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="radio" className="h-4 w-4 text-recursion-blue" />
                    <span className="text-sm">Chat</span>
                  </div>
                </div>
              </div>
            </div>
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
