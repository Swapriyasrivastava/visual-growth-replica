
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearnersShowcase from '../components/LearnersShowcase';
import Integrations from '../components/Integrations';
import Workshops from '../components/Workshops';
import WorkshopAdvantage from '../components/WorkshopAdvantage';
import AIAutomationSolutions from '../components/AIAutomationSolutions';
import SuccessStories from '../components/SuccessStories';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LatestInsights from '../components/LatestInsights';
import SolutionsCTA from '../components/SolutionsCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LearnersShowcase />
      <Integrations />
      <Workshops />
      <WorkshopAdvantage />
      <AIAutomationSolutions />
      <SuccessStories />
      <Features />
      <Testimonials />
      <FAQ />
      <LatestInsights />
      <SolutionsCTA />
    </div>
  );
};

export default Index;
