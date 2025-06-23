
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">L</span>
              </div>
              <span className="text-white text-xl font-bold">Lexend</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="w-6 h-6 border border-slate-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12l-2-2 1.5-1.5L10 9l2.5-2.5L14 8l-4 4z"/>
                </svg>
              </span>
              <span>English</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Email Builder</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Landing Builder</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Reporting</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Chatbots</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AI Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4 md:mb-0">
            Lexend © 2025, All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of use</a>
            
            <div className="flex items-center space-x-4 ml-8">
              <a href="#" className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors">
                <span className="text-slate-900 font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                <span className="text-white font-bold">X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
