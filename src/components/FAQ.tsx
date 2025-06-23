
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to know about how to code?",
      answer: "No, you don't need any coding knowledge to get started with our platform. Our intuitive interface makes automation accessible to everyone."
    },
    {
      question: "Can I use it for commercial projects?", 
      answer: "Yes, our platform supports commercial use across all our paid plans. You can create and deploy automations for your business needs."
    },
    {
      question: "Can I use it for multiple projects?",
      answer: "Absolutely! Our platform allows you to manage multiple projects and automations from a single dashboard."
    },
    {
      question: "Can I use this to create and sell a product?",
      answer: "Yes, you can use our platform to create automation products and solutions that you can sell to your customers."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all our paid plans. If you're not satisfied, we'll provide a full refund."
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Frequently asked questions!
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-700 last:border-b-0">
              <button
                className="w-full py-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors rounded-lg px-4"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-6 h-6 text-lime-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-lime-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="pb-6 px-4">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-teal-700 rounded-3xl p-12 text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-teal-100 mb-6">Can't find the answer you're looking for?</p>
          <p className="text-teal-100 mb-8">Please chat to our friendly team.</p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-full"></div>
            <div className="w-12 h-12 bg-white rounded-full -ml-4"></div>
          </div>
          
          <button className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
