
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearnersShowcase from '../components/LearnersShowcase';
import Integrations from '../components/Integrations';
import Workshops from '../components/Workshops';
import WorkshopAdvantage from '../components/WorkshopAdvantage';
import AIAutomationSolutions from '../components/AIAutomationSolutions';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import SkillupScaleup from '../components/SkillupScaleup';
import FAQ from '../components/FAQ';
import LatestInsights from '../components/LatestInsights';
import SolutionsCTA from '../components/SolutionsCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Section 1 */}
      <Hero />
      {/* Section 2 */}
      <LearnersShowcase />
      {/* Section 3 */}
      <Integrations />
      {/* Section 4 */}
      <Workshops />
      {/* Section 5 - Moved here from below */}
      <AIAutomationSolutions />
      {/* Section 6 - DESIGNED FOR YOUR CAREER GROWTH moved here */}
      <WorkshopAdvantage />
      {/* Section 7 */}
      <SuccessStories />
      {/* Section 8 */}
      <Testimonials />
      {/* Section 9 */}
      <SkillupScaleup />
      <FAQ />
      {/* Section 10 */}
      <LatestInsights />
      {/* Section 11 */}
      <SolutionsCTA />
      <Footer />
    </div>
  );
};

export default Index;
