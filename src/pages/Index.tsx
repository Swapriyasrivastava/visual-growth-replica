
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearnersShowcase from '../components/LearnersShowcase';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import WorkshopAdvantage from '../components/WorkshopAdvantage';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LearnersShowcase />
      <Features />
      <Testimonials />
      <WorkshopAdvantage />
      <SuccessStories />
      <FAQ />
    </div>
  );
};

export default Index;
