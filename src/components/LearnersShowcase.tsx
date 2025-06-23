
import React from 'react';

const LearnersShowcase = () => {
  const learners = [
    { name: "John Doe", company: "simplearm" },
    { name: "Jane Smith", company: "cognizant" },
    { name: "Mike Johnson", company: "Flipkart" },
    { name: "Sarah Wilson", company: "Walmart" },
    { name: "David Brown", company: "Teachmint" },
    { name: "Lisa Davis", company: "moneyyou" },
    { name: "Tom Miller", company: "KMAT" },
    { name: "Emma Taylor", company: "DeHaat" },
  ];

  return (
    <section className="bg-slate-100 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">6.5M+ Learners</h2>
          <p className="text-slate-600 text-lg">have reaped benefits from our programs</p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {[...learners, ...learners].map((learner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-slate-200"
              >
                <div className="w-16 h-16 bg-slate-300 rounded-full mb-2"></div>
                <div className="text-xs text-slate-600 font-medium text-center">
                  {learner.company}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-4 right-8 bg-white rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="text-xs text-slate-500">Google Reviews</div>
            </div>
            <div className="text-sm font-bold text-slate-900">Top Startup India 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnersShowcase;
