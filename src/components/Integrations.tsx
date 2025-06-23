
import React, { useState } from 'react';

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState('Marketing Automation');
  
  const categories = [
    'Marketing Automation',
    'Scheduling', 
    'Project Management',
    'Finance',
    'Spreadsheets'
  ];

  const integrations = [
    {
      name: 'Mailchimp',
      description: 'Share your ideas with Mailchimp email newsletters.',
      icon: '🟡',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'Asana',
      description: 'Leading work management from daily tasks to strategic initiatives.',
      icon: '🔴',
      bgColor: 'bg-pink-100'
    },
    {
      name: 'Zapier',
      description: 'Send and receive email via a custom Zapier.',
      icon: '🟠',
      bgColor: 'bg-orange-100'
    },
    {
      name: 'Slack',
      description: 'Team communication and collaboration platform.',
      icon: '💜',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Google Drive',
      description: 'Cloud storage and file sharing service.',
      icon: '🔵',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Trello',
      description: 'Visual project management and collaboration.',
      icon: '🟢',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium mb-4">Integrations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl">AI Automation</span> across 500+ apps
          </h2>
          <p className="text-slate-400 text-lg">
            See how we help your team solve today's biggest challenges.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors">
              <div className={`w-full h-32 ${integration.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <div className="text-4xl">{integration.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{integration.name}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{integration.description}</p>
              <button className="text-lime-400 font-medium hover:text-lime-300 transition-colors flex items-center">
                Get started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
