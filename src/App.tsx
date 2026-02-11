import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceProcess } from './components/ServiceProcess';
import { CaseStudies } from './components/CaseStudies';
import { Reviews } from './components/Reviews';
import { Credentials } from './components/Credentials';
import { InteractiveDots } from './components/InteractiveDots';
import { Quiz } from './components/Quiz';
import { SEOPage } from './components/SEOPage';
import { Careers } from './components/Careers';
import { PortfolioTemplate } from './components/PortfolioTemplate';
import { Footer } from './components/Footer';
import { BrandingPage } from './components/BrandingPage';
import { ContentCreationPage } from './components/ContentCreationPage';
import { WebDevelopmentPage } from './components/WebDevelopmentPage';
import { SocialMediaPage } from './components/SocialMediaPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayPage, setDisplayPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState<'idle' | 'exit' | 'enter'>('idle');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    setTransitionState('exit');

    setTimeout(() => {
      setDisplayPage(page);
      setCurrentPage(page);
      setTransitionState('enter');

      setTimeout(() => {
        setTransitionState('idle');
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const renderPage = () => {
    switch (displayPage) {
      case 'home':
        return <Home />;
      case 'think-first':
        return (
          <div className="bg-white">
            <Hero />
            <ProblemSolution />
            <ServiceProcess />
            <CaseStudies />
            <Reviews />
            <Credentials />
            <Quiz />
          </div>
        );
      case 'branding':
        return <BrandingPage />;
      case 'content-creation':
        return <ContentCreationPage />;
      case 'seo':
        return <SEOPage />;
      case 'web-development':
        return <WebDevelopmentPage />;
      case 'social-media':
        return <SocialMediaPage />;
      case 'careers':
        return <Careers />;
      case 'portfolio':
        return <PortfolioTemplate />;
      default:
        return <Home />;
    }
  };

  const getTransitionClasses = () => {
    if (transitionState === 'exit') {
      return 'opacity-0';
    } else if (transitionState === 'enter') {
      return 'opacity-0';
    }
    return 'opacity-100';
  };

  return (
    <div className="min-h-screen relative bg-white overflow-x-hidden">
      <InteractiveDots />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div
        className={`transition-opacity duration-150 ease-in-out ${getTransitionClasses()}`}
        style={{ willChange: 'opacity' }}
      >
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
