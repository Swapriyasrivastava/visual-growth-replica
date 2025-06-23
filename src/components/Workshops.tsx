
import React from 'react';

const Workshops = () => {
  const workshops = [
    {
      title: 'Generative AI Marketing Mastermind',
      subtitle: 'Become a Marketing Mastermind',
      duration: '2 Days',
      price: '₹ 499',
      description: 'Multiple mentors from Samur, Uber & more',
      bgGradient: 'bg-gradient-to-br from-orange-400 to-pink-500',
      icons: ['📱', '🎯', '📊']
    },
    {
      title: 'Generative AI Business Mastermind', 
      subtitle: 'Business Leader Mastermind: Build. Scale. Lead.',
      duration: '3 Days',
      price: '₹ 499',
      description: 'Multiple mentors from GrowthSchool, Uber & more',
      bgGradient: 'bg-gradient-to-br from-blue-400 to-indigo-600',
      icons: ['📈', '💼', '🚀']
    },
    {
      title: 'Generative AI Workshop',
      subtitle: 'Unlock ChatGPT: From Prompts to Productivity', 
      duration: '3 Hours',
      price: '₹ 499',
      description: 'Vaibhav Sisinty - Founder Growth School',
      bgGradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
      icons: ['🤖', '⚡', '🎯']
    },
    {
      title: 'AI For Consultants',
      subtitle: 'Leverage AI & ChatGPT as a Consultant',
      duration: '3 Hours', 
      price: '₹ 499',
      description: 'Multiple mentors from School and BCG',
      bgGradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      icons: ['💡', '🎓', '📋']
    },
    {
      title: 'LinkedIn Growth With AI',
      subtitle: 'LinkedIn Growth Blueprint',
      duration: '5 Days',
      price: '₹ 499', 
      description: 'Vaibhav Sisinty - Founder Growth School',
      bgGradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      icons: ['💼', '📱', '🌐']
    },
    {
      title: 'Product Management With AI',
      subtitle: 'Product Management Essentials: Unlocked',
      duration: '3 Hours',
      price: '₹ 499',
      description: 'Mohammad Sarosh - Product Manager at Google', 
      bgGradient: 'bg-gradient-to-br from-pink-400 to-red-500',
      icons: ['📱', '⚙️', '📊']
    }
  ];

  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Workshops
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className={`${workshop.bgGradient} rounded-2xl p-6 mb-6 text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {workshop.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{workshop.subtitle}</h3>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">{workshop.title}</h4>
              
              <div className="flex items-center text-slate-600 mb-4">
                <div className="w-4 h-4 bg-slate-300 rounded-full mr-2"></div>
                <span className="text-sm">{workshop.duration}</span>
              </div>
              
              <div className="text-2xl font-bold text-slate-900 mb-4">{workshop.price}</div>
              
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-slate-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-slate-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                    +2
                  </div>
                </div>
                <span className="text-sm text-slate-600">{workshop.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
