
import React from 'react';
import { Shield, Eye, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "bg-lime-400"
    },
    {
      icon: Eye,
      title: "Privacy Compliance", 
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "bg-lime-400"
    },
    {
      icon: Users,
      title: "Third-Party Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      color: "bg-lime-400"
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Say goodbye to the hassle of multi-tasks
          </h2>
          <p className="text-slate-400 text-lg mb-8">Managing multiple tasks with AI automation.</p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mr-8">
              <div className="text-4xl">😊</div>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 transition-colors">
              Start free trial
            </button>
          </div>
          
          <p className="text-slate-400">No credit card required!</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
