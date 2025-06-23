
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Edrissi",
      text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
      rating: 5,
      company: "Boltshift"
    },
    {
      name: "Anna Yon", 
      text: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
      rating: 5,
      company: "Interlock"
    },
    {
      name: "Mark Zellers",
      text: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
      rating: 5,
      company: "Capsule"
    },
    {
      name: "Natalia Larsson",
      text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      rating: 5,
      company: "Layers"
    }
  ];

  const companies = [
    { name: "Boltshift", color: "text-teal-400" },
    { name: "Interlock", color: "text-teal-400" }, 
    { name: "Capsule", color: "text-teal-400" },
    { name: "Layers", color: "text-teal-400" },
    { name: "Polymath", color: "text-teal-400" }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See what our <span className="bg-lime-400 text-slate-900 px-4 py-2 rounded-xl">happy users</span><br />
            are sharing about us!
          </h2>
          
          <p className="text-slate-400 text-lg mb-12">Trusted by over 1.7 million companies worldwide</p>
          
          <div className="flex items-center justify-center space-x-12 mb-16">
            {companies.map((company, index) => (
              <div key={index} className={`${company.color} font-medium text-lg`}>
                {company.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-lime-400 hover:text-lime-300 transition-colors font-medium">
            See all feedbacks →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
