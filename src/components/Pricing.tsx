
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-sm text-blue-800 rounded-full mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start for free with our basic plan, or upgrade to Premium for unlimited access and advanced features.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:w-80 border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Free</h3>
            <p className="text-gray-600 mb-6">Get started with basic features</p>
            
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
            
            <Button variant="outline" className="w-full mb-8">Install Now</Button>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Limited usage of all features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Generate up to 3 quizzes per day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Simplify up to 3 texts per day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Up to 5 chat messages per text</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 lg:w-80 border border-gray-100 relative">
            <div className="absolute -top-3 right-8 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">Unlock unlimited access</p>
            
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold">$5.99</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
            
            <Button className="recursion-button w-full mb-8">Upgrade to Premium</Button>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited usage of all features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Generate unlimited quizzes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Simplify unlimited texts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited chat messages</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Advanced summarization options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-recursion-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
