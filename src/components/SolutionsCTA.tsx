
import React from 'react';

const SolutionsCTA = () => {
  return (
    <section className="bg-gradient-to-br from-teal-800 to-teal-900 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl">AI automation</span> solutions!
          </h2>
          
          <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
            See how we help your team solve today's biggest challenges.
          </p>
          
          <button className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors mb-6">
            Start free trial with email
          </button>
          
          <p className="text-teal-200">No credit card required!</p>
          
          {/* Decorative elements */}
          <div className="absolute left-20 top-1/2 w-4 h-4 bg-lime-400 rounded-full opacity-50"></div>
          <div className="absolute right-20 top-1/3 w-6 h-6 bg-lime-400 rounded-full opacity-30"></div>
          <div className="absolute left-1/4 bottom-20 w-2 h-2 bg-white rounded-full opacity-40"></div>
          <div className="absolute right-1/3 bottom-32 w-3 h-3 bg-white rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
