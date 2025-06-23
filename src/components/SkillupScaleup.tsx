
import React from 'react';

const SkillupScaleup = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="text-lime-400">Skillup.</span> <span className="text-white">Scaleup.</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 text-white">
            <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12l-2-2 1.5-1.5L10 9l2.5-2.5L14 8l-4 4z"/>
              </svg>
            </span>
            <span className="text-lg">English</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillupScaleup;
