
import { Search, Clipboard, Brain, FileText, MessageSquare, Zap } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-sm text-blue-800 rounded-full mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Any Text</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our browser extension provides a suite of AI-powered tools to help you process, understand, and
            interact with text content more effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Select Text to Analyze</h3>
            <p className="text-gray-600 text-sm">
              Highlight any text on a webpage to instantly access all recursion's powerful features.
            </p>
            <div className="text-xs text-gray-400 mt-4">1/3</div>
          </div>
          
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Clipboard className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Paste from Clipboard</h3>
            <p className="text-gray-600 text-sm">
              Quickly process text from your clipboard without the need to navigate to another page.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Generate Quizzes</h3>
            <p className="text-gray-600 text-sm">
              Create multiple-choice questions from any text to test knowledge and understanding.
            </p>
            <div className="text-xs text-gray-400 mt-4">0/3</div>
          </div>
          
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simplify Text</h3>
            <p className="text-gray-600 text-sm">
              Convert complex paragraphs into easy-to-read bullet points for faster comprehension.
            </p>
            <div className="text-xs text-gray-400 mt-4">1/3</div>
          </div>
          
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat About Content</h3>
            <p className="text-gray-600 text-sm">
              Ask questions and get instant answers about the text you're reading.
            </p>
            <div className="text-xs text-gray-400 mt-4">4/5</div>
          </div>
          
          <div className="feature-card">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-recursion-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
            <p className="text-gray-600 text-sm">
              Upgrade for unlimited access to advanced features and higher usage limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
