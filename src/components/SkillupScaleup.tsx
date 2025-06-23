
import React from 'react';

const SkillupScaleup = () => {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <div className="w-8 h-6 bg-green-500 rounded-sm flex items-center justify-center">
            <div className="w-6 h-4 bg-white rounded-xs"></div>
          </div>
        </div>
      ),
      title: "Self-paced video content",
      description: "Master new skills on your schedule with our flexible, self-paced video content."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      title: "Office hours with Mentors for clearing blockers",
      description: "Overcome challenges fast with dedicated mentor office hours."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <div className="w-8 h-6 bg-green-500 rounded-sm flex items-center justify-center">
            <div className="w-6 h-4 bg-white rounded-xs"></div>
          </div>
        </div>
      ),
      title: "Project driven approach to achieve outcomes",
      description: "Gain practical skills through our project-driven approach for real results."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      title: "Access to network of 1000+ learners",
      description: "Tap into our vibrant network of learners, enhancing your learning experience."
    }
  ];

  const brands = [
    { name: "Google", bg: "bg-blue-100" },
    { name: "Shiprocket", bg: "bg-green-100" },
    { name: "Domino's", bg: "bg-gray-100" },
    { name: "Aditya Birla Group", bg: "bg-orange-100" },
    { name: "Dr.Reddy's", bg: "bg-purple-100" },
    { name: "Razorpay", bg: "bg-blue-100" },
    { name: "Uber", bg: "bg-gray-100" },
    { name: "Shell", bg: "bg-yellow-100" }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-3xl">
            <p className="text-gray-600 font-medium mb-4 text-sm tracking-wider uppercase">
              SKILL UP, SCALE UP
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Upskill your Team; Upscale your Business
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Elevate your team's skills to fuel efficiency and ongoing innovation for sustained business growth.
            </p>
          </div>
          <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Upskill Your Team
          </button>
        </div>

        {/* Why learn with GrowthSchool section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            Why learn with GrowthSchool?
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                {feature.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands in Collaboration */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Brands in Collaboration
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className={`${brand.bg} rounded-lg p-4 flex items-center justify-center h-16`}>
                <span className="text-sm font-medium text-gray-700">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillupScaleup;
