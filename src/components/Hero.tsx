
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const textOptions = ['AI auto', 'AI management', 'AI Automation', 'Chatbots'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOptions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Header Banner */}
      <div className="bg-lime-400 text-slate-900 py-2 px-6 text-center text-sm font-medium">
        The Lexend AI automation guide is here. Check it out!
      </div>
      
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
        {/* Floating icons */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-lime-400 rounded-xl flex items-center justify-center animate-bounce">
            <div className="w-8 h-8 bg-slate-900 rounded-lg"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 bg-white rounded-xl"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/6 w-12 h-12 bg-lime-400 rounded-full animate-spin"></div>
          <div className="absolute bottom-1/3 right-1/6 w-14 h-14 bg-teal-500 rounded-xl animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block bg-lime-400 text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-8">
              Automate your workflow
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Get more done in less time with{' '}
              <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl transition-all duration-500 ease-in-out">
                {textOptions[currentText]}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock your <span className="text-white font-semibold">productivity</span> potential and automate as fast as you can type with our intuitive and powerful <span className="text-white font-semibold">AI automation</span> app.
            </p>
            
            <button className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors space-x-3">
              <Play className="w-5 h-5 fill-current" />
              <span>Start free trial</span>
            </button>
            
            <div className="flex items-center justify-center space-x-12 mt-16 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-500 rounded"></div>
                <span>AI-Powered Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lime-400 rounded"></div>
                <span>Chatbots, Free forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-600 rounded"></div>
                <span>Cutting-edge AI features</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
