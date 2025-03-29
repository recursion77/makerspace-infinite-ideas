
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white py-3 px-4 sm:px-6 flex items-center justify-between border-b">
      <div className="flex items-center space-x-2">
        <div className="bg-recursion-blue rounded p-1">
          <Plus className="h-4 w-4 text-white" />
        </div>
        <span className="font-medium text-gray-800">recursion</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
      </nav>
      <Button className="recursion-button">Install Extension</Button>
    </header>
  );
};

export default Navbar;
