
import { Plus, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-recursion-blue rounded p-1">
                <Plus className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-gray-800">recursion</span>
            </div>
            <p className="text-gray-600 max-w-xs text-sm">
              Simplifying how you interact with text online through AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Changelog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2023 recursion. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-gray-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
