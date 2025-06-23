
import React from 'react';
import { Zap, Database, PieChart, Shield, Settings, Users } from 'lucide-react';

const AIAutomationSolutions = () => {
  const solutions = [
    {
      icon: <Zap className="w-8 h-8 text-slate-800" />,
      title: "Fast and Reliable",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <Database className="w-8 h-8 text-slate-800" />,
      title: "Discover Data Everywhere", 
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <PieChart className="w-8 h-8 text-slate-800" />,
      title: "Enrich Data with Context",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <Shield className="w-8 h-8 text-slate-800" />,
      title: "Risk Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <Settings className="w-8 h-8 text-slate-800" />,
      title: "Privacy Compliance", 
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <Users className="w-8 h-8 text-slate-800" />,
      title: "Third-Party Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium mb-4 text-sm tracking-wider uppercase">Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl">AI-Powered</span> Automation Solutions
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Offers a unified platform that fosters innovation while providing end-to-end data management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-300 transition-colors">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-slate-400 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Say goodbye to the hassle of multi-tasks
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Managing multiple tasks with AI automation.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center mr-8">
              <div className="text-white text-2xl">😊</div>
            </div>
          </div>
          
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors flex items-center mx-auto">
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Start free trial
          </button>
          <p className="text-slate-400 mt-4">No credit card required!</p>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSolutions;
