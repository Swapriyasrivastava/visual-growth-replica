
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://lexend-nextjs.vercel.app/assets/images/common/logo-new-light.svg" 
              alt="Lexend" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-white hover:text-lime-400 cursor-pointer transition-colors">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-white hover:text-lime-400 cursor-pointer transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-white hover:text-lime-400 transition-colors">Insights</a>
            <a href="#" className="text-white hover:text-lime-400 transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-lime-400 transition-colors">All Demo Pages</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-lime-400 transition-colors">Contact sales</a>
            <a href="#" className="text-white hover:text-lime-400 transition-colors">Log in</a>
            <button className="bg-lime-400 text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition-colors">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
