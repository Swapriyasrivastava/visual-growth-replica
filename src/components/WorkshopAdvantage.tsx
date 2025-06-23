
import React from 'react';

const WorkshopAdvantage = () => {
  const advantages = [
    {
      title: "Industry-Relevant Skills",
      description: "Stay ahead in your field by mastering high-demand skills through our online sessions.",
      image: "https://d3kl8zsmmx4oop.cloudfront.net/Card_8_f9fc775756.png",
      bgColor: "bg-slate-800"
    },
    {
      title: "Career Opportunities", 
      description: "Tap into a wealth of career opportunities through our established network.",
      image: "https://d3kl8zsmmx4oop.cloudfront.net/Card_5_0fe9b6d5df.png",
      bgColor: "bg-slate-800"
    },
    {
      title: "Community at the Center",
      description: "Engage with your vibrant community of learners and seasoned industry mentors.",
      image: "https://d3kl8zsmmx4oop.cloudfront.net/Card_7_444b043af8.png",
      bgColor: "bg-slate-800"
    },
    {
      title: "Learn by Doing",
      description: "Dive into real challenges from gaining hands-on experience.",
      image: "https://d3kl8zsmmx4oop.cloudfront.net/Card_8_f9fc775756.png",
      bgColor: "bg-slate-800"
    }
  ];

  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-slate-600 font-medium mb-4">DESIGNED FOR YOUR CAREER GROWTH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get the GrowthSchool Advantage
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className={`${advantage.bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-transform`}>
              <div className="mb-6">
                <img 
                  src={advantage.image} 
                  alt={advantage.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-slate-300 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopAdvantage;
