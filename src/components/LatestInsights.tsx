
import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestInsights = () => {
  const insights = [
    {
      title: 'Unlock productivity potential with AI',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      bgGradient: 'bg-gradient-to-br from-purple-400 to-blue-500'
    },
    {
      title: 'Automate as fast as you can type with AI', 
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      bgGradient: 'bg-gradient-to-br from-slate-600 to-slate-800'
    },
    {
      title: 'Intuitive & powerful AI automation app',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      bgGradient: 'bg-gradient-to-br from-teal-400 to-blue-500'
    },
    {
      title: 'Team solve today\'s biggest challenges',
      description: 'Join the thousands of satisfied users and take your business to the next level today and the power.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop',
      bgGradient: 'bg-gradient-to-br from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest from <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl">our insights</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-colors group">
              <div className={`h-48 ${insight.bgGradient} relative overflow-hidden`}>
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{insight.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">{insight.description}</p>
                <button className="text-lime-400 font-medium hover:text-lime-300 transition-colors flex items-center group-hover:translate-x-1 transition-transform">
                  Read post <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <button className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors">
            ←
          </button>
          <button className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
