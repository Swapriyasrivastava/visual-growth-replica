
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Abhiram",
      title: "Senior Social Media Manager", 
      company: "Ogilvy",
      nextTitle: "Senior Social Media Manager",
      nextCompany: "Infinity Learn"
    },
    {
      name: "Teja Vanama",
      title: "Deputy Manager (Geology)",
      company: "NMDC Limited", 
      nextTitle: "Assistant Manager",
      nextCompany: "NMDC Limited"
    },
    {
      name: "Sujay Putta",
      title: "Chief Executive Officer",
      company: "The Kaliq",
      nextTitle: "Chief Brand Designer & Founder", 
      nextCompany: "SCGB Solutions"
    },
    {
      name: "Ravi Shankar",
      title: "VP - Products & Marketing",
      company: "STL - Sterlite Technologies Limited",
      nextTitle: "Vice President - Products & Marketing",
      nextCompany: "Skyera"
    },
    {
      name: "Aditya Suri", 
      title: "Senior Associate",
      company: "alliantgroup",
      nextTitle: "Associate Manager",
      nextCompany: "Google Operations Center"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-slate-600 font-medium mb-2">SUCCESS STORIES</p>
            <h2 className="text-4xl font-bold text-slate-900">Our Learners at Leading Companies</h2>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div className="font-bold text-slate-900">{story.name}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-slate-900 font-medium">{story.title}</div>
                <div className="text-sm text-teal-600 font-medium">{story.company}</div>
              </div>
              
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              
              <div>
                <div className="text-sm text-slate-900 font-medium">{story.nextTitle}</div>
                <div className="text-sm text-teal-600 font-medium">{story.nextCompany}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
